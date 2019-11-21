import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  photos: Photo[] = [];

  ngOnInit() {
    this.photoService.getPhotos().subscribe(result => {
      this.photos = result;
    });
  }
}
