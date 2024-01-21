import Button from "../../buttons/Button";

export default function Banner(){
    return(
        <div id="Banner">
            <h1>Car sales Agency</h1>
            <Button type='big'children={"Оставить заявку"} href={"#form"}></Button>
        </div>
    )
}