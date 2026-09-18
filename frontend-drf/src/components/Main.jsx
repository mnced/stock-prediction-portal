import Button from "./Button";


export default function Main () {
    return <>
   
    <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
            <h1 className="text-light">Stock Prediction Portal</h1>
            <p className="text-light lead">
                Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard 
                dummy text ever since 1966, when designers at 
                Letraset and James Mosley, the librarian at St 
                Bride Printing Library in London, took a 1914 
                Cicero translation and scrambled it to make dummy 
                text for Letraset's Body Type sheets. 
                It has survived not only many decades, 
                but also the leap into electronic typesetting, 
                remaining essentially unchanged. 
                It was popularised thanks to these 
            </p>
            <Button text='Login' class='btn-outline-info'/>

        </div>
    </div>

    </>
}