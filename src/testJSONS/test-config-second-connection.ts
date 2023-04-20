export const controllersSecond = [
  {
    ip: "2", // ip контроллера
    links: [
      {
        ip: "1", // ip, с которым связь
        clientToServer: [
          // первый - рассматриваемый котроллер, второй - следующий или предыдущий
          [
            { name: "Client 204-01", cl_object: "222" }, // массив кортежей двух элементов
            { name: "Server 104-02", cl_object: "333" },
          ],
        ],
        serverToClient: [
          [
            { name: "Server 204-02", cl_object: "333" },
            { name: "Client 104-01", cl_object: "777" },
          ],
        ],
      },
    ],
  },
]
