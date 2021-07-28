import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // GET 6 products from the database
  productList = [
    'https://i.pcmag.com/imagery/reviews/01LnwPzDtlJP9XzLBk9qdbq-1..1613506210.png',
    'https://i.shgcdn.com/e5911dbd-c7a4-4daa-a774-292d9157456f/-/format/auto/-/preview/3000x3000/-/quality/better/',
    'https://cdn.vox-cdn.com/thumbor/G1xlcGD-NAc9xYn5s0uI9fD-DxE=/0x451:6300x3749/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22219694/alloyorigins60.jpg',
    'https://techcrunch.com/wp-content/uploads/2021/02/keyboard.jpg?w=730&crop=1',
    'https://d2skuhm0vrry40.cloudfront.net/2018/articles/2018-08-12-11-01/why-are-mechanical-keyboards-good-for-gaming-7004-1534068087233.jpg/EG11/resize/1200x-1/why-are-mechanical-keyboards-good-for-gaming-7004-1534068087233.jpg',
    'https://icdn.digitaltrends.com/image/digitaltrends/razer-huntsman-quartz-edition-mechanical-gaming-keyboard-2.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
