import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bprofile } from './bprofile';
import { Observable } from 'rxjs';
import { Websiteprofile } from './websiteprofile';
import { HttpParams } from '@angular/common/http';
import { Domains } from './user/shared/domains'

@Injectable({
  providedIn: 'root'
})
export class BprofileService {
  

  constructor(private http: HttpClient) { }

  public getBcp(): Observable<Bprofile[]> {
    return this.http.get<Bprofile[]>('http://localhost:9100/bandwidth-control-profiles/all');
  }

  public addBcp(bcp: Bprofile): Observable<Bprofile> {
    return this.http.post<Bprofile>('http://localhost:9100/bandwidth-control-profiles', bcp);
  }

  public getProfile(id:number){
    return this.http.get('http://localhost:9100/bandwidth-control-profiles/' + id +'/website-profiles/all');
  }

  public addWebprofile(id:number, webdomain: Domains): Observable<any>{
    return this.http.post('http://localhost:9100/bandwidth-control-profiles/' + id +'/website-profiles', webdomain);
  }
  public changestatus(id:number|undefined, domainid:number|undefined, newstatus:boolean){
    
    
    return this.http.put('http://localhost:9100/bandwidth-control-profiles/'+id+'/website-profiles/'+domainid+'/change-status?status='+ newstatus, {});
  }
  public bandwidthProfileStatus(id:number| undefined, bcpstatus:boolean){
    return this.http.put('http://localhost:9100/bandwidth-control-profiles/' + id + '/change-status?status='+ bcpstatus, {});
  }

}
