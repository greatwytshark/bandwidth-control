import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/http';
import { NgForm } from '@angular/forms';
import { response } from 'express';
import { BprofileService } from 'src/app/bprofile.service';
import { Domains } from 'src/app/user/shared/domains';
declare const M: any;

@Component({
  selector: 'app-webp',
  templateUrl: './webp.component.html',
  styleUrls: ['./webp.component.css']
})
export class WebpComponent implements OnInit {
  
  constructor(private activatedRoute: ActivatedRoute, private bprofileService: BprofileService) { }
  
  ngOnInit(): void {
   
  }
 

}
