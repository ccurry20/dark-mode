import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = (darkmode) => {
    const [value, setValue] = useLocalStorage("darkmode", false)

    // const toggle = () => {
    //     if (value === "light") {
    //         window.localStorage.setItem("value", "dark")
    //         setValue("dark")
    //     } else if (value === "dark") {
    //         window.localStorage.setItem("value", "light")
    //         setValue("light")
    //     }
    // }

    // const toggle = () => {
    //     if (value === (true))  {
    //         window.localStorage.setItem("value", false)
    //         setValue(false)
    //     } else if (value === (false)) {
    //         window.localStorage.setItem("value", true)
    //         setValue(true)
    //     }
    // }

    //useEffect((value) => {
        if (value) {
        document.body.classList.add("dark-mode")
        } else {
        document.body.classList.remove("dark-mode")
        }
    //}, [value])

return [
    value,
    //toggle, 
    setValue
]
}