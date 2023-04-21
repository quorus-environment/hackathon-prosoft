export const controllers = [
  {
    ip: "10.21.1212.1", // ip контроллера
    links: [
      {
        ip: "30.20.1040", // ip, с которым связь
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
  {
    ip: "30.20.1040", // ip контроллера
    links: [
      {
        ip: "10.21.1212.1", // ip, с которым связь
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
      {
        ip: "10.40.10.10", // ip, с которым связь
        clientToServer: [
          // первый - рассматриваемый котроллер, второй - следующий или предыдущий
          [
            { name: "Client 204-02", cl_object: "333" }, // массив кортежей двух элементов
            { name: "Server 1404-01", cl_object: "555" },
          ],
        ],
        serverToClient: [
          [
            { name: "Server 204-02", cl_object: "333" },
            { name: "Client 1404-01", cl_object: "555" },
          ],
        ],
      },
    ],
  },
  {
    ip: "10.30.10.10",
    links: [
      {
        ip: "10.21.1212.1",
        clientToServer: [
          // первый - рассматриваемый котроллер, второй - следующий или предыдущий
          [
            { name: "Client 304-01", cl_object: "777" },
            { name: "Server 104-02", cl_object: "333" },
          ],
        ],
        serverToClient: [[]],
      },
      {
        ip: "30.20.1040",
        clientToServer: [],
        serverToClient: [
          [
            { name: "Server 304-01", cl_object: "777" },
            { name: "Client 204-02", cl_object: "333" },
          ],
        ],
      },
    ],
  },
]
