import { Gif } from "../interfaces/gif";
import { GiphyResponse } from "../interfaces/giphy.interface";

export class GifMapper {

static mapGiphyItemtogif(item: GiphyResponse): Gif {
  return {
    id: item.data[0].id,
    title: item.data[0].title,
    url: item.data[0].images.fixed_height.url
  };
}

  static mapGiphyToGifArray(items: GiphyResponse[]): Gif[] {
    return items.map(GifMapper.mapGiphyItemtogif);
  }

}
