import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 data=[
    {"name":"Rahul","age":20,"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"},
    {"name":"Nibin","age":21,"photo":"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"},
    {"name":"Jishnu","age":22,"photo":"https://c8.alamy.com/zooms/9/b752bc64564a4b468e8b0b7d2937de44/2c7trn9.jpg"},
    {"name":"Bharat","age":20,"photo":"https://media.istockphoto.com/photos/just-smile-picture-id654100408?k=20&m=654100408&s=612x612&w=0&h=qILiX0fUUwVPkV0PwB6fd0DpsTx-xm3wlBn0toybx4c="},
    {"name":"Sudhil","age":21,"photo":"https://media.istockphoto.com/photos/mullet-picture-id1304467487?k=20&m=1304467487&s=612x612&w=0&h=84WOndXdQzurYMw6oJed_bAu-25PxJGRG_9-7te3N0A="},
    {"name":"Athul","age":22,"photo":"https://cdn-images.resumelab.com/authors/tom_gerencer_resumelab.jpg"}
   ]


}
