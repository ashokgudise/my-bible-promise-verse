import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FlickrOutput } from 'src/app/models/flickr-output';
import { FlickrPhoto } from 'src/app/models/flickr-photo';

@Injectable({
  providedIn: 'root'
})

export class FlickrImagesService {

  prevKeyword: string;
  currPage = 1;

  constructor(private http: HttpClient) { }

  searchKeyword(keyword: string) {
    if (this.prevKeyword === keyword) {
      this.currPage++;
    } else {
      this.currPage = 1;
    }
    this.prevKeyword = keyword;
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    //const params = `api_key=${environment.flickr.key}&text=${keyword}&styles=depthoffield&format=json&nojsoncallback=1&per_page=12&page=${this.currPage}`;
    const params = [];
    return this.http.get(url + params).pipe(map((res: FlickrOutput) => {
      const urlArr = [];
      res.photos.photo.forEach((ph: FlickrPhoto) => {
        const photoObj = {
          url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
          title: ph.title
        };
        urlArr.push(photoObj);
      });
      return urlArr;
    }));
  }

}
