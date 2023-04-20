export type TServerPoint = {
    name: string
    client: string
    address: string
}

export type TServerMaster = {
    name: string
    ip: string
    homeIP: string
    points: TServerPoint[]
}

export type TServer = {
    masters: TServerMaster[]
}