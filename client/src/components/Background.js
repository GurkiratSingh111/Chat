import styles from "./Background.module.css"
import pentagon from "../assets/pentChrysler.png";
export default function Background(){
    return(
    <div id={styles['background-component']}>
        <div id={styles['diamonds-container']}>

            <img src={pentagon}></img>
            <img src={pentagon}></img>
            <img src={pentagon}></img>
            <img src={pentagon}></img>
            <img src={pentagon}></img>
            <img src={pentagon}></img>
            <img src={pentagon}></img>
            <img src={pentagon}></img>
            <img src={pentagon}></img>

        </div>
    </div>);
}