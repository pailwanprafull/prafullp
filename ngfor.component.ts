import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
// title:string="Top 10 Songs in Bollywood";
title: string = 'Top Singers';
movies: Movie[] = [{ title: '3 Idiots', director: 'Rajkumar Hirani', cast: 'Amir khan', releaseDate: '2009'},
{ title: 'Lagaan', director: 'Ashutosh', cast: 'Amir khan', releaseDate: '2002'},
{ title: 'Tanhaji : The unsung Warrior', director: 'Om raut', cast: 'Ajay Devgan', releaseDate: '2020'}]

singers:Singer[]=[{SingerName:"Arjit Sing", totalSong:100,favSong:"Ager Tum Sath Ho",releaseDate:"2017"},
{SingerName:"Lata Mangshker", totalSong:400,favSong:"Vadant Marathe veer Daudale Saat",releaseDate:"1974"},
{SingerName:"Ajay Atul", totalSong:300,favSong:"Morya Morya",releaseDate:"2018"},
{SingerName:"Shreya", totalSong:40,favSong:"Sun Raha Hai",releaseDate:"2017"},
{SingerName:"Neha Kakkar", totalSong:40,favSong:"Mile Ho Tum ",releaseDate:"2016"},
{SingerName:"A R Rahaman",totalSong:200,favSong:"Vande Mataram",releaseDate:"2014"}]

  constructor() { }

  ngOnInit() {
    
  }

}
class Movie
 {title: string;
  director: string;
  cast : string;
  releaseDate: string;
}
class Singer{
  SingerName:string;
  totalSong:number;
  favSong:string;
  releaseDate:string;

}
