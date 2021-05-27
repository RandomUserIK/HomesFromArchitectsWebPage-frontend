export abstract class AbstractGallery {
  public currentPage = 1;
  public pageSize = 10;
  public totalElements: number;
  public isLoading: boolean;

  abstract onPageChange(): void;
}
