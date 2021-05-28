import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MyWorker, MyWorkerDataBase, MyWorkerType} from "./shared/worker.module";
import {PagesModule} from "./shared/pages.module";
import {Note} from "../../../project11-main/src/app/shared/interfaces/note.interface";


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

  pages: PagesModule[] = [];
  idd = 1;
  main = "";
  head = "";
  buttonEnabled = false;
  constructor() {
    // setTimeout(() => {
    //
    //   this.fontSize = 25;
    // }, 3000);

  }


  addNew() {
    this.buttonEnabled = true;
    let page: PagesModule = { id: this.idd++, header: this.head, text: this.main, date: new Date() }
    this.pages.push(page);
  }

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
