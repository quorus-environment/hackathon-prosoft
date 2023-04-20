export const controllers = [
  {
    ip: "1", // ip контроллера
    links: [
      {
        ip: "2", // ip, с которым связь
        clientToServer: [
          // первый - рассматриваемый котроллер, второй - следующий или предыдущий
          [
            { name: "Client 104-01", cl_object: "777" }, // массив кортежей двух элементов
            { name: "Server 204-01", cl_object: "222" },
          ],
        ],
        serverToClient: [
          [
            { name: "Server 104-02", cl_object: "333" },
            { name: "Client 204-02", cl_object: "333" },
          ],
        ],
      },
    ],
  },
]
