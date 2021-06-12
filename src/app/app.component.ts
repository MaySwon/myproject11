import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';


export  interface PagesModule {
  id: number;
  date: Date;
  header: string;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  // flag = true;
  // // blockX = 0;
  // // blockY = 0;
  // name:string="Tom";
  // age:number = 24;
  // inputValue:string  ='';
  // fontSize = 20;
  // someArr:string[] = ['первый', 'второй', 'третий', 'четвертый'];
  // @ViewChild('someInput') someInputName : ElementRef | undefined;
  // elseTemplate: any;
  // workers: MyWorker[] =  MyWorkerDataBase;
  // myWorkerType =  MyWorkerType;
  title = 'Список заметок';
  button = 'Добавить';
  pages: PagesModule[] = [];
  idd = 1;
  num =  1;
  card = 1;
  numMass: any = [];
  main = "";
  head:any = "";
  buttonEnabled = false;
  constructor() {
    // setTimeout(() => {
    //
    //   this.fontSize = 25;
    // }, 3000);

  }

  addNew() {

    this.buttonEnabled = true;
    let page = { id: this.idd++, header: this.head, text: this.main, date: new Date() }
    console.log(this.head);
    this.pages.push(page);

    this.head = '';
    this.main = '';
    this.num++;
    if((this.num % 4)  === 0){
      this.card++;
      this.numMass.push(this.card);
      console.log(this.card);
    }
  }

  delete(index:number) {
    this.pages.splice(index,1);
  }
    // Если необходимо предотвратить/отменить событие по умолчанию,
    // то необходимо вызвать метод preventDefault у события
    // https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault
    // e.preventDefault();
    // если необходимо также предотвратить дальнейшее "всплытие" события,
    // то необходимо вызвать метод stopPropagation у события
    // https://developer.mozilla.org/ru/docs/Web/API/Event/stopPropagation
    // e.stopPropagation();


  ngOnInit(): void {
    // console.log(this.someInputName);
  }

  ngAfterViewInit(): void {
    // console.log(this.someInputName);

  }

  // getByType(type: number){
  //   return this.workers.filter((worker) => worker.type === type)
  // }
  //
  // onDeleteWorker(id:number){
  //   console.log(id);
  // }
  //
  // hello() {
  //    return 'Hello, maaan';
  // }
  //
  // // getCoords(e: MouseEvent ){
  // //   this.blockX = e.offsetX;
  // //   this.blockY = e.offsetY;
  // // }
  //
  //
  // getData(elm:HTMLInputElement ){
  //   // console.log(elm.value);
  //   // @ts-ignore
  //   console.log(this.someInputName.nativeElement.value);
  // }



}
