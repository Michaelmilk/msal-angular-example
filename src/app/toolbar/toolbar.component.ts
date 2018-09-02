import { Component, OnInit } from '@angular/core';
import { MsalService } from 'msal-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    graphUrl: string;
    constructor(private msalService: MsalService, private httpClient: HttpClient) { }

    ngOnInit() {
        this.graphUrl = "https://graph.microsoft.com/v1.0/";
    }

    login() {
        this.msalService.login();
    }

    logout() {
        this.msalService.logout();
    }

    get authenticated(): boolean {
        //return this.msalService.authenticated;
        console.log("auth", this.msalService);
        //console.log("auth user", this.msalService.getUser());
        //this.getUserPhoto();
        //return this.msalService.authenticated;
        return false;
    }

    testFuction() {
        let user = this.msalService.getUser();
        console.log("uesr1", user);
        this.msalService.getUser().then((user: any) => {
            console.log("uesr", user);
        })

        this.getUserPhoto();
    }

    getUserPhoto() {
        this.msalService.getToken().then((token: any) => {
            console.log("token", token);

            const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
            this.httpClient.get(`${this.graphUrl}/me`, { headers: headers }).subscribe((userInfo: any) => {
                console.log("userinfo", userInfo);
            });

            this.httpClient.get(`${this.graphUrl}/me/photo/$value`, { headers: headers }).subscribe((photo: any) => {
                console.log("userinfo", photo);
            });

            this.httpClient.get(`${this.graphUrl}/users/danipi@M365x342201.onmicrosoft.com`, { headers: headers }).subscribe((photo: any) => {
                console.log("userinfo", photo);
            });
        })
    }
}
