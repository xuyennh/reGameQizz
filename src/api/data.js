const data = [
  {
    id: 1,
    level: "easy",
    quizze: {
      question: "Ở Việt Nam, rồng bay ở đâu và đáp ở đâu?",
      answers: [
        {
          value: "A: Hà Nội và Long An",
          name: "a",
          isCorrect: false,
        },
        {
          value: "B: Hà nội và Quảng Ninh",
          name: "b",
          isCorrect: false,
        },
        {
          value: "C: Thăng Long và Hạ Long",
          name: "c",
          isCorrect: true,
        },
        {
          value: "D: Quảng Ninh và Long An",
          name: "d",
          isCorrect: false,
        },
      ],
      score: 200,
    },
  },
  {
    id: 2,
    level: "easy",
    quizze: {
      question: "Người đẹp Monalisa không có thứ gì?",
      answers: [
        { value: "A: Tiền", name: "a", isCorrect: false },
        { value: "B: Lông Chân", name: "b", isCorrect: false },
        { value: "C: Lông Mày", name: "c", isCorrect: false },
        { value: "D: Chồng", name: "d", isCorrect: true },
      ],
      score: 200,
    },
  },
  {
    id: 3,
    level: "easy",
    quizze: {
      question: "Bệnh gì bác sỹ bó tay?",
      answers: [
        { value: "A: Gãy tay", name: "a", isCorrect: true },
        { value: "B: Siđa", name: "b", isCorrect: false },
        { value: "C: Bệnh sĩ", name: "c", isCorrect: false },
        { value: "D: HIV", name: "d", isCorrect: false },
      ],
      score: 200,
    },
  },
  {
    id: 4,
    level: "normal",
    quizze: {
      question: "Sở thú bị cháy, con gì chạy ra đầu tiên?",
      answers: [
        { value: "A: Con chim", name: "a", isCorrect: false },
        { value: "B: Con Người", name: "b", isCorrect: true },
        { value: "C: Con rắn", name: "c", isCorrect: false },
        { value: "D: Con Tê Giác", name: "d", isCorrect: false },
      ],
      score: 500,
    },
  },
  {
    id: 5,
    level: "normal",
    quizze: {
      question: "Nơi nào con trai có thể sinh con?",
      answers: [
        { value: "A: Trong Nhà", name: "a", isCorrect: false },
        { value: "B: Rừng Rậm", name: "b", isCorrect: false },
        { value: "C: Dưới Nước", name: "c", isCorrect: true },
        { value: "D: Đáp Án Khác", name: "d", isCorrect: false },
      ],
      score: 500,
    },
  },
  {
    id: 6,
    level: "normal",
    quizze: {
      question: "Trên Nhấp Dưới Giật Là Đang Làm gì?",
      answers: [
        { value: "A: Chơi Bóng Bàn", name: "a", isCorrect: false },
        { value: "B: Đang Học", name: "b", isCorrect: false },
        { value: "C: Trộm Cắp", name: "c", isCorrect: false },
        { value: "D: Câu Cá", name: "d", isCorrect: true },
      ],
      score: 500,
    },
  },
  {
    id: 7,
    level: "easy",
    quizze: {
      question: "Con Đường Dài Nhất Là Con Đường Nào?",
      answers: [
        { value: "A: Đường Đời", name: "a", isCorrect: true },
        {
          value: "B: Đường Đi Nước Ngoài",
          name: "b",
          isCorrect: false,
        },
        { value: "C: Đường Đèo", name: "c", isCorrect: false },
        { value: "D: Đường Đi", name: "d", isCorrect: false },
      ],
      score: 200,
    },
  },
  {
    id: 8,
    level: "easy",
    quizze: {
      question: "Con gì đầu dê mình ốc?",
      answers: [
        { value: "A: Con Ốc", name: "a", isCorrect: false },
        { value: "B: Con Mương", name: "b", isCorrect: false },
        { value: "C: Con Đường", name: "c", isCorrect: false },
        { value: "D: Con Dốc", name: "d", isCorrect: true },
      ],
      score: 200,
    },
  },
  {
    id: 9,
    level: "easy",
    quizze: {
      question: "Cái gì của chồng mà vợ thích cầm nhất?",
      answers: [
        { value: "A: Tiền", name: "a", isCorrect: true },
        { value: "B: Sách", name: "b", isCorrect: false },
        { value: "C: Tay", name: "c", isCorrect: false },
        { value: "D: Nhẫn", name: "d", isCorrect: false },
      ],
      score: 200,
    },
  },
  {
    id: 10,
    level: "hard",
    quizze: {
      question: "Giải Grand Slam đầu tiên trong năm là giải nào?",
      answers: [
        { value: "A: Austrlia mở rộng", name: "a", isCorrect: true },
        { value: "B: Wimbledon", name: "b", isCorrect: false },
        { value: "C: Roland Garos", name: "c", isCorrect: false },
        { value: "D: Mỹ mở rộng", name: "d", isCorrect: false },
      ],
      score: 1000,
    },
  },
  {
    id: 11,
    level: "hard",
    quizze: {
      question: "AFC Asian Cup 2011 được tổ chức tại quốc gia nào?",
      answers: [
        { value: "A: Qatar", name: "a", isCorrect: true },
        { value: "B: Hàn Quốc", name: "b", isCorrect: false },
        { value: "C: Nhật Bản", name: "c", isCorrect: false },
        { value: "D: Iraq", name: "d", isCorrect: false },
      ],
      score: 1000,
    },
  },
  {
    id: 12,
    level: "normal",
    quizze: {
      question: "Sông Bến Hải và sông Thạch Hãn nằm ở tỉnh nào?",
      answers: [
        { value: "A: Quảng Bình", name: "a", isCorrect: false },
        { value: "B: Quảng Ninh", name: "b", isCorrect: false },
        { value: "C: Quảng Trị", name: "c", isCorrect: true },
        { value: "D: Quảng Ngãi", name: "d", isCorrect: false },
      ],
      score: 500,
    },
  },
  {
    id: 13,
    level: "hard",
    quizze: {
      question: "Đại Ngu là quốc hiệu của triều đại nào?",
      answers: [
        { value: "A: Triều Ngô", name: "a", isCorrect: false },
        { value: "B: Triều Hồ", name: "b", isCorrect: true },
        { value: "C: Các chúa Nguyễn", name: "c", isCorrect: false },
        { value: "D: Nhà Tây Sơn", name: "d", isCorrect: false },
      ],
      score: 1000,
    },
  },
];

export default data;
