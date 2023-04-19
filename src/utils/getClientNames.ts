export const getClientNames = (client: any): any[] => {
    const names: any[] = []
    client.map((slave: any) => {
        slave.points.map((point: any) => {
            names.push(point.name)
        })
    })
    return names
}