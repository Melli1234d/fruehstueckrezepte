export default function ZutatenListElement({image, title, amount, icon}) {
    return (
        //3 grid Div: Bild, Text, Pfeil
        <div>
            <img src={image} alt={title}/>
            <div>
                <h4>{title}</h4>
                <p>{amount}</p>
            </div>
            <img src={icon} alt={title}/>
        </div>
    );
  }
  