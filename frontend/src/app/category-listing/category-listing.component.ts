import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {

  // Get product where isTopRated == true and display the rest of the products in same category
  productList = [
    'https://i.pcmag.com/imagery/reviews/01LnwPzDtlJP9XzLBk9qdbq-1..1613506210.png',
    'https://i.shgcdn.com/e5911dbd-c7a4-4daa-a774-292d9157456f/-/format/auto/-/preview/3000x3000/-/quality/better/',
    'https://cdn.vox-cdn.com/thumbor/G1xlcGD-NAc9xYn5s0uI9fD-DxE=/0x451:6300x3749/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22219694/alloyorigins60.jpg',
    'https://techcrunch.com/wp-content/uploads/2021/02/keyboard.jpg?w=730&crop=1',
    'https://d2skuhm0vrry40.cloudfront.net/2018/articles/2018-08-12-11-01/why-are-mechanical-keyboards-good-for-gaming-7004-1534068087233.jpg/EG11/resize/1200x-1/why-are-mechanical-keyboards-good-for-gaming-7004-1534068087233.jpg',
    'https://icdn.digitaltrends.com/image/digitaltrends/razer-huntsman-quartz-edition-mechanical-gaming-keyboard-2.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-gamingmice-index-1586536892.jpg?crop=1xw:0.9995201535508638xh;center,top&resize=1200:*',
    'https://www.cnet.com/a/img/k5CUGXTdQ99lqSkv43_gGfS3ZSE=/1200x630/2021/03/12/b3f1bae0-a41e-474e-af92-0c6be9a4db94/glorious-model-o-wired-gaming-mouse.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
