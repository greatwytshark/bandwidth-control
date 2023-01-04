import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BprofileService } from '../bprofile.service';
import { HttpErrorResponse } from '@angular/common/http/http';
import { NgForm } from '@angular/forms';
import { Websiteprofile } from '../websiteprofile';
import { response } from 'express';
import { Domains } from '../user/shared/domains';
declare const M: any;

@Component({
  selector: 'app-bprofile',
  templateUrl: './bprofile.component.html',
  styleUrls: ['./bprofile.component.css']
})
export class BprofileComponent implements OnInit {
  retrieveBcp: any;
  username: String= "";
  domains: any;
  id!:number;
  status:any;
  newstatus!: boolean;
  passedStatus = this.activatedRoute.snapshot.params['active'];
  passedName = this.activatedRoute.snapshot.params['name'];

  constructor(private activatedRoute: ActivatedRoute, private bprofileService: BprofileService) { }
   public updatestatus=(domainid:number, activation:boolean)=>{
      // call end point with 
      this.status=activation;
    console.log(domainid);
    console.log(this.status);
    if(this.status==true){
      this.newstatus=false;
    }else{
      this.newstatus=true;
    }
    this.bprofileService.changestatus(this.id!, domainid, this.newstatus).subscribe((response:any)=>{
        console.log(response);
        
    });

     
     this.id = this.activatedRoute.snapshot.params['id'];

     this.bprofileService.getProfile(this.id!).subscribe((profile: any) => {
       this.retrieveBcp = profile.content;

     });

   }

  ngOnInit(): void {
   // let id = this.activatedRoute.snapshot.params['id'];
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log("data type of id is ",this.id);

    this.bprofileService.getProfile(this.id!).subscribe((profile: any) => {
      console.log(profile);
      this.retrieveBcp = profile.content;
      
      console.log(this.retrieveBcp);
 
      console.log(profile);

      
      
    });
    this.bprofileService.getProfile(this.id!).subscribe((identity: any) => {
      console.log("here now");
      console.log("This is my identity",identity);
      this.domains = identity.content;
      console.log("this is my domain, ",this.domains);
      this.username = this.domains.shift().bandwidthControlProfile.name;
      console.log("this is my first domain",this.domains[0]["active"])
      console.log(this.username);

    });
    
    
  }
  public onAddDomain(addForm: NgForm):void{
    this.id = this.activatedRoute.snapshot.params['id'];
    this.bprofileService.addWebprofile(this.id, addForm.value).subscribe(
      (webdomain:Domains) =>{
        console.log(webdomain);
      }
    )
  }

  public changeBcpStatus(bcpstatus:boolean): void{
    this.id = this.activatedRoute.snapshot.params['id'];
    this.status = bcpstatus;
    console.log(this.status);
    console.log(this.id);
    if(this.status==true){
      this.newstatus = false;
    }else{
      this.newstatus = true;
    }
    this.bprofileService.bandwidthProfileStatus(this.id, this.newstatus).subscribe(
      (response:any) =>{
        console.log(response);
      }
    )
  }
  
   



  public bandwidth = document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, Option);
  });

}
