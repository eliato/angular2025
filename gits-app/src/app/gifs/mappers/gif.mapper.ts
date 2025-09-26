import { Gif } from "../interfaces/gif";
import { GiphyItem } from "../interfaces/giphy.interface";

export class GifMapper {

static mapGiphyItemtogif(item: GiphyItem): Gif {
  return {
    id: item.id,
    title: item.title,
    url: item.images.original.url
  };
}

  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemtogif);
  }

}
