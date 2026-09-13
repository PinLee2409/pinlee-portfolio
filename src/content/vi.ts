import type { Dictionary } from "./en";

/** Vietnamese copy. Tool and product names stay as they are written. */
const vi: Dictionary = {
  meta: {
    title: "PinLee — Kỹ sư phần mềm, TP. Hồ Chí Minh",
    description:
      "Kỹ sư phần mềm freelance, xây dịch vụ Spring Boot, back end microservice và những ứng dụng React, Android nói chuyện với chúng.",
    ogTitle: "PinLee — Kỹ sư phần mềm",
    ogDescription:
      "Dịch vụ Spring Boot, back end microservice và những ứng dụng React, Android nói chuyện với chúng.",
  },

  nav: {
    work: "Dự án",
    stack: "Công nghệ",
    path: "Chặng đường",
    contact: "Liên hệ",
  },

  ui: {
    sections: "Các mục",
    openIndex: "Mục lục",
    closeIndex: "Đóng",
    openToWork: "Đang nhận việc",
    language: "Ngôn ngữ",
  },

  hero: {
    role: "Kỹ sư phần mềm",
    cityShort: "TP. Hồ Chí Minh",
    city: "TP. Hồ Chí Minh, Việt Nam",
    lede: "Tôi xây phần chạy phía sau màn hình — API Spring Boot, back end microservice, và những ứng dụng React, Android nói chuyện với chúng.",
    dossier: [
      { label: "Địa điểm", value: "TP. Hồ Chí Minh, VN · UTC+7" },
      { label: "Nhận dự án từ", value: "2024" },
      { label: "Đang học", value: "Kỹ thuật phần mềm, HITU" },
      { label: "Làm việc với", value: "Java · Spring Boot · React · Android" },
    ],
    statusLabel: "Trạng thái",
    status: "Đang nhận dự án",
    primaryAction: "Xem dự án",
    secondaryAction: "Bắt đầu dự án",
    traceTitle: "Thanh toán đơn hàng",
    traceNote: "Một lượt thanh toán đi qua các service.",
  },

  work: {
    label: "Dự án",
    title: "Bốn hệ thống, đi từ bản phác đầu tiên đến lúc chạy thật.",
    metaUnit: "dự án chọn lọc",
    metaYears: "2024—2025",
    projects: [
      {
        title: "Nexus Social — mạng xã hội trên nền microservices",
        year: "2025",
        kind: "Full-stack · mobile",
        team: "Đồ án tốt nghiệp · nhóm 4 người",
        summary:
          "Một mạng xã hội làm như sản phẩm thật chứ không phải demo: chín service Spring Boot sau một gateway, Kafka nối giữa chúng, MySQL, MongoDB và Neo4j mỗi kho giữ đúng phần hợp với nó. Web, trang quản trị và app Expo dùng chung một hợp đồng API. Tôi làm xuyên các tầng, chủ yếu ở mảng mobile — chat thời gian thực, gọi thoại và video bằng WebRTC, và livestream.",
        stack: [
          "Java 21",
          "Spring Boot",
          "Kafka",
          "MongoDB",
          "Neo4j",
          "React Native",
          "WebRTC",
          "Docker",
        ],
        href: undefined,
      },
      {
        title: "Sàn thương mại điện tử với chatbot đặt hàng",
        year: "2025",
        kind: "Full-stack",
        team: undefined,
        summary:
          "Gian hàng và trang quản trị chạy trên REST API Spring Boot. Chatbot đọc danh mục, dựng giỏ hàng, nhận thanh toán và chốt đơn — người mua không phải rời khỏi cuộc trò chuyện.",
        stack: ["Java", "Spring Boot", "React", "MySQL", "REST"],
        href: undefined,
      },
      {
        title: "Phần mềm quản lý cửa hàng xe máy",
        year: "2024",
        kind: "Desktop",
        team: undefined,
        summary:
          "Phần mềm dùng ngay tại quầy. Nhân viên đăng nhập bằng khuôn mặt, hàng nhập về theo file Excel vài nghìn dòng, hoá đơn in tại chỗ.",
        stack: ["C#", ".NET", "SQL Server", "Face recognition"],
        href: undefined,
      },
      {
        title: "Ứng dụng đặt lịch trên Android",
        year: "2024",
        kind: "Mobile",
        team: undefined,
        summary:
          "Ứng dụng Android thuần, lịch trống cập nhật tức thì nên hai người không thể đặt trùng một khung giờ. Thông báo đẩy xác nhận từng lượt đặt, thanh toán ngay trong ứng dụng.",
        stack: ["Android", "Java", "Firebase", "Push notifications"],
        href: undefined,
      },
    ],
  },

  stack: {
    label: "Công nghệ",
    title: "Những gì tôi dùng, xếp theo vị trí trong hệ thống.",
    metaUnit: "công nghệ",
    groups: [
      {
        name: "Giao diện",
        note: "Phần người dùng chạm vào",
        items: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Bootstrap",
        ],
      },
      {
        name: "Phía máy chủ",
        note: "Nơi mọi việc diễn ra",
        items: [
          "Java",
          "Spring Boot",
          "Spring Cloud",
          "C#",
          ".NET",
          "Laravel",
          "REST APIs",
        ],
      },
      {
        name: "Di động",
        note: "Đã lên chợ ứng dụng",
        items: ["Android", "React Native", "Expo", "Firebase"],
      },
      {
        name: "Thời gian thực",
        note: "Những thứ không thể chờ",
        items: ["Kafka", "Socket.IO", "WebRTC", "Server-Sent Events"],
      },
      {
        name: "Dữ liệu",
        note: "Mỗi kho một việc hợp với nó",
        items: ["MySQL", "MongoDB", "Neo4j", "Redis"],
      },
      {
        name: "Vận hành",
        note: "Đưa lên chạy và giữ cho nó chạy",
        items: ["Docker", "Kubernetes", "Nginx", "AWS EC2", "GitHub Actions", "Git"],
      },
    ],
  },

  path: {
    label: "Chặng đường",
    title: "Làm freelance từ 2024, kể theo đúng thứ tự.",
    meta: "2024 — nay",
    roles: [
      {
        period: "2025 — nay",
        title: "Kỹ sư microservices",
        org: "Dự án từ xa",
        summary:
          "Tách monolith thành các service Spring Cloud, đóng gói bằng Docker và chạy trên Kubernetes. Phía client dùng React Native.",
      },
      {
        period: "2024 — nay",
        title: "Lập trình viên Android",
        org: "Freelance",
        summary:
          "Ứng dụng Java thuần, nối với REST và Firebase, từ màn hình đầu tiên đến khi lên Google Play.",
      },
      {
        period: "2024 — nay",
        title: "Lập trình viên web full-stack",
        org: "Tự làm chủ",
        summary:
          "Nhóm nhỏ và hợp đồng cá nhân: giao diện React trên nền dịch vụ Spring Boot và Node, đi từ thiết kế đến khi lên máy chủ.",
      },
    ],
  },

  contact: {
    label: "Liên hệ",
    title: "Bạn đang cần xây thứ gì?",
    meta: "Phản hồi trong một ngày",
    intro:
      "Hãy kể hệ thống cần làm được gì và dành cho ai. Tôi sẽ trả lời bằng hướng làm, thời gian và chi phí.",
    rows: {
      email: "Email",
      phone: "Điện thoại",
      github: "GitHub",
      based: "Địa điểm",
    },
    form: {
      name: "Tên của bạn",
      namePlaceholder: "Nguyễn Văn A",
      email: "Email",
      emailPlaceholder: "ban@congty.com",
      message: "Bạn đang xây gì?",
      messagePlaceholder: "Hệ thống đặt lịch cho phòng khám, ra mắt tháng 3…",
      send: "Gửi tin nhắn",
      sendMail: "Mở ứng dụng mail",
      sending: "Đang gửi…",
      sent: "Đã gửi. Tôi sẽ trả lời qua email đó.",
      failed: "Chưa gửi được. Bạn email trực tiếp tới",
      mailSubject: "Liên hệ dự án từ",
    },
  },

  footer: {
    built: "Dựng bằng Next.js · TP. Hồ Chí Minh",
    top: "Lên đầu trang ↑",
  },
};

export default vi;
