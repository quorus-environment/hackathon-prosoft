export type TSlavePoint = {
    name: string
    address: string
}

export type TClientSlave = {
    name: string
    ip: string
    points: TSlavePoint[]
}

export type TClient = {
    slaves: TClientSlave[]
}