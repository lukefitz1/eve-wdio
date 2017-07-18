class Search {
	get searchTitle() { return $('#sli_results > div.sli_heading > h1'); }
	get searchResultsGrid() { return $('#sli_results > ul.products-grid.sli_container'); }
	get noResultsText() { return $('#sli_no_results > div.sli_no_results_text'); }
	get popularSearches() { return $('#sli_no_results > div.sli_pop_wrapper'); }
}

module.exports = new Search();