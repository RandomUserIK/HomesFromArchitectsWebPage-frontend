export abstract class AbstractGallery {
  public currentPage = 1;
  public pageSize = 10;
  public totalElements: number;
  public loading: boolean;

  abstract onPageChange(): void;
}
