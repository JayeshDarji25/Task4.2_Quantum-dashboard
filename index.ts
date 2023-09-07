let item: HTMLDivElement = document.getElementById("items") as HTMLDivElement;
let it: HTMLCollectionOf<Element> = document.getElementsByClassName("itm") as HTMLCollectionOf<Element>;

for(let i=0;i<it.length;i++){
  it[i]?.addEventListener("click", function handleClick(event) {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}