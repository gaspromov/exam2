import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from '../API';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends API {
  header: HttpHeaders;
  url = "";

  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set ('Content-type', 'application/json');
  }

  async getVideo() {
    return this.get(`videos`, this.header).toPromise();
  }

  
  async getVideoById(id: number) {
    return this.get(`videos/${id}`, this.header).toPromise();
  }


  async postVideo(data) {
    return this.post(`videos`, data, this.header).toPromise();
  }

  async putVideo(id: number, data) {
    return this.put(`videos/${id}`, data, this.header).toPromise();
  }

  async deleteVideo(id: number) {
    return this.delete(`videos/${id}`, this.header).toPromise();
  }

  async getCpu() {
    return this.get(`cpu`, this.header).toPromise();
  }

  
  async getCpuById(id: number) {
    return this.get(`cpu/${id}`, this.header).toPromise();
  }


  async postCpu(data) {
    return this.post(`cpu`, data, this.header).toPromise();
  }

  async putCpu(id: number, data) {
    return this.put(`cpu/${id}`, data, this.header).toPromise();
  }

  async deleteCpu(id: number) {
    return this.delete(`cpu/${id}`, this.header).toPromise();
  }

  async getMother() {
    return this.get(`mothers`, this.header).toPromise();
  }

  
  async getMotherById(id: number) {
    return this.get(`mothers/${id}`, this.header).toPromise();
  }


  async postMother(data) {
    return this.post(`mothers`, data, this.header).toPromise();
  }

  async putMother(id: number, data) {
    return this.put(`mothers/${id}`, data, this.header).toPromise();
  }

  async deleteMother(id: number) {
    return this.delete(`mothers/${id}`, this.header).toPromise();
  }
}
