<?php

namespace App\JsonApi\Invoicerecords;

use CloudCreativity\LaravelJsonApi\Pagination\StandardStrategy;
use Illuminate\Database\Eloquent\Builder;
use App\Models\invoicerecords;
use Illuminate\Support\Collection;
use App\JsonApi\Base\AbstractAdapter;
use Illuminate\Support\Facades\Auth;


class Adapter extends AbstractAdapter
{

    /**
     * Mapping of JSON API attribute field names to model keys.
     *
     * @var array
     */
    protected $attributes = [];

    /**
     * Mapping of JSON API filter names to model scopes.
     *
     * @var array
     */
    protected $filterScopes = [];

    /**
     * Adapter constructor.
     *
     * @param StandardStrategy $paging
     */
    public function __construct(StandardStrategy $paging)
    {
        parent::__construct(new \App\Models\invoicerecords(), $paging);
    }
    public function creating(invoicerecords $invoicerecords)
    {

        \App\Http\Controllers\payment::payment(request());

    }    public function updating(invoicerecords $invoicerecords)
    {

        \App\Http\Controllers\payment::payment(request());

    }
    /**
     * @param Builder $query
     * @param Collection $filters
     * @return void
     */
    protected function filter($query, Collection $filters)
    {
        $query->whereUserId(Auth::id());
        $this->filterWithScopes($query, $filters);
    }

}
