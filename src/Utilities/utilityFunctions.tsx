import { Engine, Status } from "@/Enums/Status"

export function iconSwitch(param: Engine, styleText?: string) {
    switch (param) {
        case Engine.Unreal:
            return (<img alt="Unreal Engine 5 Icon" src={"/assets/icons8-unreal-engine-48.png"} className={styleText} />)
        case Engine.Unity:
            return (<img alt="Unity Icon" src={"/assets/icons8-unity-white.png"} className={styleText} />)
    }
}

export function renderSwitch(param: Status) {
    switch (param) {
        case Status.InProgress:
            return "In Progress"
        case Status.Finished:
            return "Complete"
    }
}
