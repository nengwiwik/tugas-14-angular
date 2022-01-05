import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mahasiswa: any=[];
  constructor(private http: HttpClient) {}
  ngOnInit(){
    this.http.get('http://localhost:3000/users')
    .subscribe(data=>{
      this.mahasiswa = data;
    });
  }
  hapus(id: any){
    this.http.delete('http://localhost:3000/users/'+id)
    .subscribe(()=>{
    this.mahasiswa = this.mahasiswa.filter( mhs => mhs.id !== id);
    });
  }

}
