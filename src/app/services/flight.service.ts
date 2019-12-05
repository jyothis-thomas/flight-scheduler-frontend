import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { Flight } from "../models/flight";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private endpoint = 'https://fight-scheduler.herokuapp.com/flights/';

  constructor(private http: HttpClient) { }

  //GET A SINGLE FLIGHT
  getFlight(id: number): Observable<any>{
    return this.http.get(this.endpoint + id);
  }

  //GET All Flights
  getAllFlights(): Observable<any>{
    return this.http.get(this.endpoint)
  }

  //POST - Add a new flight
  flightCreate(flight: Flight): Observable<object>{
    return this.http.post(this.endpoint,flight);
  }

  //PUT - Update
  updateFlight(id: number, payload: any): Observable<object>{
    return this.http.put(this.endpoint + id, payload);
  }

  //DELETE A FLIGHT
  deleteFlight(id: number): Observable<any>{
    return this.http.delete(this.endpoint + id);
  }

  //DELETE ALL FLIGHTS
  deleteAllFlights(): Observable<any>{
    return this.http.delete(this.endpoint);
  }

}
