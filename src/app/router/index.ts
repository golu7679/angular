import { ActivatedRoute, Params, Router } from "@angular/router";

class CustomRouter {
    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

    addRoute(data: Params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            replaceUrl: true,
            queryParams: data,
            queryParamsHandling: "merge" // remove to replace all query params by provided
        });
    }
    removeRoute() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            if (params && Object.keys(params).length > 0) {
                const urlWithoutQueryParams = this.router.url.substring(0, this.router.url.indexOf("?"));
                this.router.navigateByUrl(urlWithoutQueryParams).then(() => {
                    // @ts-ignore
                    params = null; // any other functionality when navigation succeeds
                });
            }
        }).unsubscribe();
    }
}
