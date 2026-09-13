/**
 * A column of source drifting upward in the right-hand band of the page —
 * texture, never something to read, and deliberately kept out of the column
 * the body copy sits in. Pure CSS, hidden from assistive tech, frozen when the
 * visitor asks for reduced motion, and dropped entirely on small screens where
 * there is no spare margin to give it.
 */
const source = `@RestController
@RequestMapping("/api/orders")
class OrderController {

  private final OrderService orders;
  private final PaymentClient payments;

  @PostMapping("/{id}/checkout")
  ResponseEntity<OrderView> checkout(
      @PathVariable UUID id,
      @Valid @RequestBody CheckoutRequest body) {

    var order = orders.find(id)
        .orElseThrow(OrderNotFound::new);

    if (order.isPaid()) {
      return status(CONFLICT).build();
    }

    var receipt = payments.charge(
        order.total(), body.method());

    orders.markPaid(order, receipt);
    events.publish(new OrderPaid(order.id()));

    return ResponseEntity.ok(
        OrderView.of(order));
  }
}

spring:
  cloud:
    gateway:
      routes:
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**

$ kubectl rollout status deploy/orders
deployment "orders" rolled out

export function useOrder(id: string) {
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    const abort = new AbortController();

    fetch(\`/api/orders/\${id}\`, {
      signal: abort.signal,
    })
      .then((res) => res.json())
      .then(setOrder);

    return () => abort.abort();
  }, [id]);

  return order;
}

suspend fun claim(slot: Slot): Booking =
  db.runTransaction { tx ->
    val fresh = tx.get(slot.ref)
    require(fresh.open) { "slot taken" }
    tx.update(slot.ref, "open", false)
    Booking(slot.id, currentUser.uid)
  }.await()
`;

export default function CodeBackdrop() {
  return (
    <div className="code-backdrop" aria-hidden="true">
      <div className="code-lane">
        <pre>{source.repeat(3)}</pre>
      </div>
    </div>
  );
}
