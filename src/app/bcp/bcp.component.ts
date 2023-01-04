import { Component, OnInit } from '@angular/core';
import { Bprofile } from '../bprofile';
import { BprofileService } from '../bprofile.service';
import { HttpErrorResponse } from '@angular/common/http/http';
import { NgForm } from '@angular/forms';
import { response } from 'express';
declare const M: any;


@Component({
  selector: 'app-bcp',
  templateUrl: './bcp.component.html',
  styleUrls: ['./bcp.component.css']
})
export class BcpComponent implements OnInit {
  public bprofiles!: Bprofile[];
  id!: number;
  status: any;
  newstatus!: boolean;


  constructor(private bprofileService: BprofileService) { }

  ngOnInit(): void {
    this.getBcp();
  }
  public getBcp(): void {
    this.bprofileService.getBcp().subscribe(
      (response: any) => {
        this.bprofiles = response.content;
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
    );

  }

  public onAddBcp(addForm: NgForm): void {
    this.bprofileService.addBcp(addForm.value).subscribe(
      (response: Bprofile)=>{
        console.log(response);
        this.getBcp();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      
    );
  }

  public changeBcpStatus(bcpstatus: any, bcpid:any): void {
    this.status = bcpstatus;
    this.id = bcpid;
    console.log(this.status);
    console.log(this.id);
    if (this.status == true) {
      this.newstatus = false;
    } else {
      this.newstatus = true;
    }
    this.bprofileService.bandwidthProfileStatus(this.id, this.newstatus).subscribe(
      (response: any) => {
        console.log(response);
        this.getBcp;
      }
    )
  }


  public onOpenModal(bprofile: Bprofile, mode: string): void {
    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('class', 'modal-trigger');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addBcpModal')
    }
    
  }
  public bandwidth = document.addEventListener('DOMContentLoaded', function(){
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems,Option);
  });
  
}
