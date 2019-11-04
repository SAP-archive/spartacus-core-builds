/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var Occ;
(function (Occ) {
    /**
     *
     * An interface representing Country.
     * @record
     */
    function Country() { }
    Occ.Country = Country;
    if (false) {
        /**
         * \@member {string} [isocode]
         * @type {?|undefined}
         */
        Country.prototype.isocode;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Country.prototype.name;
    }
    /**
     *
     * An interface representing Region.
     * @record
     */
    function Region() { }
    Occ.Region = Region;
    if (false) {
        /**
         * \@member {string} [countryIso]
         * @type {?|undefined}
         */
        Region.prototype.countryIso;
        /**
         * \@member {string} [isocode]
         * @type {?|undefined}
         */
        Region.prototype.isocode;
        /**
         * \@member {string} [isocodeShort]
         * @type {?|undefined}
         */
        Region.prototype.isocodeShort;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Region.prototype.name;
    }
    /**
     *
     * An interface representing RegionList.
     * @record
     */
    function RegionList() { }
    Occ.RegionList = RegionList;
    if (false) {
        /**
         * \@member {Region[]} [regions]
         * @type {?|undefined}
         */
        RegionList.prototype.regions;
    }
    /**
     *
     * An interface representing Address.
     * @record
     */
    function Address() { }
    Occ.Address = Address;
    if (false) {
        /**
         * \@member {string} [companyName]
         * @type {?|undefined}
         */
        Address.prototype.companyName;
        /**
         * \@member {Country} [country]
         * @type {?|undefined}
         */
        Address.prototype.country;
        /**
         * \@member {boolean} [defaultAddress]
         * @type {?|undefined}
         */
        Address.prototype.defaultAddress;
        /**
         * \@member {string} [email]
         * @type {?|undefined}
         */
        Address.prototype.email;
        /**
         * \@member {string} [firstName]
         * @type {?|undefined}
         */
        Address.prototype.firstName;
        /**
         * \@member {string} [formattedAddress]
         * @type {?|undefined}
         */
        Address.prototype.formattedAddress;
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        Address.prototype.id;
        /**
         * \@member {string} [lastName]
         * @type {?|undefined}
         */
        Address.prototype.lastName;
        /**
         * \@member {string} [line1]
         * @type {?|undefined}
         */
        Address.prototype.line1;
        /**
         * \@member {string} [line2]
         * @type {?|undefined}
         */
        Address.prototype.line2;
        /**
         * \@member {string} [phone]
         * @type {?|undefined}
         */
        Address.prototype.phone;
        /**
         * \@member {string} [postalCode]
         * @type {?|undefined}
         */
        Address.prototype.postalCode;
        /**
         * \@member {Region} [region]
         * @type {?|undefined}
         */
        Address.prototype.region;
        /**
         * \@member {boolean} [shippingAddress]
         * @type {?|undefined}
         */
        Address.prototype.shippingAddress;
        /**
         * \@member {string} [title]
         * @type {?|undefined}
         */
        Address.prototype.title;
        /**
         * \@member {string} [titleCode]
         * @type {?|undefined}
         */
        Address.prototype.titleCode;
        /**
         * \@member {string} [town]
         * @type {?|undefined}
         */
        Address.prototype.town;
        /**
         * \@member {boolean} [visibleInAddressBook]
         * @type {?|undefined}
         */
        Address.prototype.visibleInAddressBook;
    }
    /**
     *
     * An interface representing AddressList.
     * @record
     */
    function AddressList() { }
    Occ.AddressList = AddressList;
    if (false) {
        /**
         * \@member {Address[]} [addresses]
         * @type {?|undefined}
         */
        AddressList.prototype.addresses;
    }
    /**
     *
     * An interface representing ErrorModel.
     * Error message
     *
     * @record
     */
    function ErrorModel() { }
    Occ.ErrorModel = ErrorModel;
    if (false) {
        /**
         * \@member {string} [message] Descriptive, human readable error message.
         * @type {?|undefined}
         */
        ErrorModel.prototype.message;
        /**
         * \@member {string} [reason] Additional classification specific for each
         * error type e.g. 'noStock'.
         * @type {?|undefined}
         */
        ErrorModel.prototype.reason;
        /**
         * \@member {string} [subject] Identifier of the related object e.g. '1'.
         * @type {?|undefined}
         */
        ErrorModel.prototype.subject;
        /**
         * \@member {string} [subjectType] Type of the object related to the error
         * e.g. 'entry'.
         * @type {?|undefined}
         */
        ErrorModel.prototype.subjectType;
        /**
         * \@member {string} [type] Type of the error e.g. 'LowStockError'.
         * @type {?|undefined}
         */
        ErrorModel.prototype.type;
    }
    /**
     *
     * An interface representing ErrorList.
     * List of errors
     *
     * @record
     */
    function ErrorList() { }
    Occ.ErrorList = ErrorList;
    if (false) {
        /**
         * \@member {ErrorModel[]} [errors]
         * @type {?|undefined}
         */
        ErrorList.prototype.errors;
    }
    /**
     *
     * An interface representing AddressValidation.
     * @record
     */
    function AddressValidation() { }
    Occ.AddressValidation = AddressValidation;
    if (false) {
        /**
         * \@member {string} [decision]
         * @type {?|undefined}
         */
        AddressValidation.prototype.decision;
        /**
         * \@member {ErrorList} [errors]
         * @type {?|undefined}
         */
        AddressValidation.prototype.errors;
        /**
         * \@member {Address[]} [suggestedAddresses]
         * @type {?|undefined}
         */
        AddressValidation.prototype.suggestedAddresses;
    }
    /**
     *
     * An interface representing Price.
     * @record
     */
    function Price() { }
    Occ.Price = Price;
    if (false) {
        /**
         * \@member {string} [currencyIso]
         * @type {?|undefined}
         */
        Price.prototype.currencyIso;
        /**
         * \@member {string} [formattedValue]
         * @type {?|undefined}
         */
        Price.prototype.formattedValue;
        /**
         * \@member {number} [maxQuantity]
         * @type {?|undefined}
         */
        Price.prototype.maxQuantity;
        /**
         * \@member {number} [minQuantity]
         * @type {?|undefined}
         */
        Price.prototype.minQuantity;
        /**
         * \@member {PriceType} [priceType] Possible values include: 'BUY', 'FROM'
         * @type {?|undefined}
         */
        Price.prototype.priceType;
        /**
         * \@member {number} [value]
         * @type {?|undefined}
         */
        Price.prototype.value;
    }
    /**
     *
     * An interface representing Stock.
     * @record
     */
    function Stock() { }
    Occ.Stock = Stock;
    if (false) {
        /**
         * \@member {number} [stockLevel]
         * @type {?|undefined}
         */
        Stock.prototype.stockLevel;
        /**
         * \@member {string} [stockLevelStatus]
         * @type {?|undefined}
         */
        Stock.prototype.stockLevelStatus;
    }
    /**
     *
     * An interface representing Image.
     * @record
     */
    function Image() { }
    Occ.Image = Image;
    if (false) {
        /**
         * \@member {string} [altText]
         * @type {?|undefined}
         */
        Image.prototype.altText;
        /**
         * \@member {string} [format]
         * @type {?|undefined}
         */
        Image.prototype.format;
        /**
         * \@member {number} [galleryIndex]
         * @type {?|undefined}
         */
        Image.prototype.galleryIndex;
        /**
         * \@member {ImageType} [imageType] Possible values include: 'PRIMARY',
         * 'GALLERY'
         * @type {?|undefined}
         */
        Image.prototype.imageType;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        Image.prototype.url;
    }
    /**
     *
     * An interface representing VariantOptionQualifier.
     * @record
     */
    function VariantOptionQualifier() { }
    Occ.VariantOptionQualifier = VariantOptionQualifier;
    if (false) {
        /**
         * \@member {Image} [image]
         * @type {?|undefined}
         */
        VariantOptionQualifier.prototype.image;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        VariantOptionQualifier.prototype.name;
        /**
         * \@member {string} [qualifier]
         * @type {?|undefined}
         */
        VariantOptionQualifier.prototype.qualifier;
        /**
         * \@member {string} [value]
         * @type {?|undefined}
         */
        VariantOptionQualifier.prototype.value;
    }
    /**
     *
     * An interface representing VariantOption.
     * @record
     */
    function VariantOption() { }
    Occ.VariantOption = VariantOption;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        VariantOption.prototype.code;
        /**
         * \@member {Price} [priceData]
         * @type {?|undefined}
         */
        VariantOption.prototype.priceData;
        /**
         * \@member {Stock} [stock]
         * @type {?|undefined}
         */
        VariantOption.prototype.stock;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        VariantOption.prototype.url;
        /**
         * \@member {VariantOptionQualifier[]} [variantOptionQualifiers]
         * @type {?|undefined}
         */
        VariantOption.prototype.variantOptionQualifiers;
    }
    /**
     *
     * An interface representing BaseOption.
     * @record
     */
    function BaseOption() { }
    Occ.BaseOption = BaseOption;
    if (false) {
        /**
         * \@member {VariantOption[]} [options]
         * @type {?|undefined}
         */
        BaseOption.prototype.options;
        /**
         * \@member {VariantOption} [selected]
         * @type {?|undefined}
         */
        BaseOption.prototype.selected;
        /**
         * \@member {string} [variantType]
         * @type {?|undefined}
         */
        BaseOption.prototype.variantType;
    }
    /**
     *
     * An interface representing SearchQuery.
     * @record
     */
    function SearchQuery() { }
    Occ.SearchQuery = SearchQuery;
    if (false) {
        /**
         * \@member {string} [value]
         * @type {?|undefined}
         */
        SearchQuery.prototype.value;
    }
    /**
     *
     * An interface representing SearchState.
     * @record
     */
    function SearchState() { }
    Occ.SearchState = SearchState;
    if (false) {
        /**
         * \@member {SearchQuery} [query]
         * @type {?|undefined}
         */
        SearchState.prototype.query;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        SearchState.prototype.url;
    }
    /**
     *
     * An interface representing Breadcrumb.
     * @record
     */
    function Breadcrumb() { }
    Occ.Breadcrumb = Breadcrumb;
    if (false) {
        /**
         * \@member {string} [facetCode]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.facetCode;
        /**
         * \@member {string} [facetName]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.facetName;
        /**
         * \@member {string} [facetValueCode]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.facetValueCode;
        /**
         * \@member {string} [facetValueName]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.facetValueName;
        /**
         * \@member {SearchState} [removeQuery]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.removeQuery;
        /**
         * \@member {SearchState} [truncateQuery]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.truncateQuery;
    }
    /**
     *
     * An interface representing Component.
     * @record
     */
    function Component() { }
    Occ.Component = Component;
    if (false) {
        /**
         * \@member {Date} [modifiedTime]
         * @type {?|undefined}
         */
        Component.prototype.modifiedTime;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Component.prototype.name;
        /**
         * \@member {any} [otherProperties]
         * @type {?|undefined}
         */
        Component.prototype.otherProperties;
        /**
         * \@member {string} [typeCode]
         * @type {?|undefined}
         */
        Component.prototype.typeCode;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        Component.prototype.uid;
    }
    /**
     *
     * An interface representing ComponentList.
     * @record
     */
    function ComponentList() { }
    Occ.ComponentList = ComponentList;
    if (false) {
        /**
         * \@member {Component[]} [component]
         * @type {?|undefined}
         */
        ComponentList.prototype.component;
    }
    /**
     *
     * An interface representing ContentSlot.
     * @record
     */
    function ContentSlot() { }
    Occ.ContentSlot = ContentSlot;
    if (false) {
        /**
         * \@member {ComponentList} [components]
         * @type {?|undefined}
         */
        ContentSlot.prototype.components;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        ContentSlot.prototype.name;
        /**
         * \@member {string} [position]
         * @type {?|undefined}
         */
        ContentSlot.prototype.position;
        /**
         * \@member {string} [slotId]
         * @type {?|undefined}
         */
        ContentSlot.prototype.slotId;
        /**
         * \@member {boolean} [slotShared]
         * @type {?|undefined}
         */
        ContentSlot.prototype.slotShared;
        /**
         * \@member {string} [slotStatus]
         * @type {?|undefined}
         */
        ContentSlot.prototype.slotStatus;
    }
    /**
     *
     * An interface representing ContentSlotList.
     * @record
     */
    function ContentSlotList() { }
    Occ.ContentSlotList = ContentSlotList;
    if (false) {
        /**
         * \@member {ContentSlot[]} [contentSlot]
         * @type {?|undefined}
         */
        ContentSlotList.prototype.contentSlot;
    }
    /**
     *
     * An interface representing CMSPage.
     * @record
     */
    function CMSPage() { }
    Occ.CMSPage = CMSPage;
    if (false) {
        /**
         * \@member {ContentSlotList} [contentSlots]
         * @type {?|undefined}
         */
        CMSPage.prototype.contentSlots;
        /**
         * \@member {boolean} [defaultPage]
         * @type {?|undefined}
         */
        CMSPage.prototype.defaultPage;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        CMSPage.prototype.name;
        /**
         * \@member {string} [template]
         * @type {?|undefined}
         */
        CMSPage.prototype.template;
        /**
         * \@member {string} [title]
         * @type {?|undefined}
         */
        CMSPage.prototype.title;
        /**
         * \@member {string} [typeCode]
         * @type {?|undefined}
         */
        CMSPage.prototype.typeCode;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        CMSPage.prototype.uid;
    }
    /**
     *
     * An interface representing CardType.
     * @record
     */
    function CardType() { }
    Occ.CardType = CardType;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        CardType.prototype.code;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        CardType.prototype.name;
    }
    /**
     *
     * An interface representing CardTypeList.
     * @record
     */
    function CardTypeList() { }
    Occ.CardTypeList = CardTypeList;
    if (false) {
        /**
         * \@member {CardType[]} [cardTypes]
         * @type {?|undefined}
         */
        CardTypeList.prototype.cardTypes;
    }
    /**
     *
     * An interface representing PromotionOrderEntryConsumed.
     * @record
     */
    function PromotionOrderEntryConsumed() { }
    Occ.PromotionOrderEntryConsumed = PromotionOrderEntryConsumed;
    if (false) {
        /**
         * \@member {number} [adjustedUnitPrice]
         * @type {?|undefined}
         */
        PromotionOrderEntryConsumed.prototype.adjustedUnitPrice;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        PromotionOrderEntryConsumed.prototype.code;
        /**
         * \@member {number} [orderEntryNumber]
         * @type {?|undefined}
         */
        PromotionOrderEntryConsumed.prototype.orderEntryNumber;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        PromotionOrderEntryConsumed.prototype.quantity;
    }
    /**
     *
     * An interface representing PromotionRestriction.
     * @record
     */
    function PromotionRestriction() { }
    Occ.PromotionRestriction = PromotionRestriction;
    if (false) {
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        PromotionRestriction.prototype.description;
        /**
         * \@member {string} [restrictionType]
         * @type {?|undefined}
         */
        PromotionRestriction.prototype.restrictionType;
    }
    /**
     *
     * An interface representing Promotion.
     * @record
     */
    function Promotion() { }
    Occ.Promotion = Promotion;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Promotion.prototype.code;
        /**
         * \@member {string[]} [couldFireMessages]
         * @type {?|undefined}
         */
        Promotion.prototype.couldFireMessages;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        Promotion.prototype.description;
        /**
         * \@member {boolean} [enabled]
         * @type {?|undefined}
         */
        Promotion.prototype.enabled;
        /**
         * \@member {Date} [endDate]
         * @type {?|undefined}
         */
        Promotion.prototype.endDate;
        /**
         * \@member {string[]} [firedMessages]
         * @type {?|undefined}
         */
        Promotion.prototype.firedMessages;
        /**
         * \@member {number} [priority]
         * @type {?|undefined}
         */
        Promotion.prototype.priority;
        /**
         * \@member {Image} [productBanner]
         * @type {?|undefined}
         */
        Promotion.prototype.productBanner;
        /**
         * \@member {string} [promotionGroup]
         * @type {?|undefined}
         */
        Promotion.prototype.promotionGroup;
        /**
         * \@member {string} [promotionType]
         * @type {?|undefined}
         */
        Promotion.prototype.promotionType;
        /**
         * \@member {PromotionRestriction[]} [restrictions]
         * @type {?|undefined}
         */
        Promotion.prototype.restrictions;
        /**
         * \@member {Date} [startDate]
         * @type {?|undefined}
         */
        Promotion.prototype.startDate;
        /**
         * \@member {string} [title]
         * @type {?|undefined}
         */
        Promotion.prototype.title;
    }
    /**
     *
     * An interface representing PromotionResult.
     * @record
     */
    function PromotionResult() { }
    Occ.PromotionResult = PromotionResult;
    if (false) {
        /**
         * \@member {PromotionOrderEntryConsumed[]} [consumedEntries]
         * @type {?|undefined}
         */
        PromotionResult.prototype.consumedEntries;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        PromotionResult.prototype.description;
        /**
         * \@member {Promotion} [promotion]
         * @type {?|undefined}
         */
        PromotionResult.prototype.promotion;
    }
    /**
     *
     * An interface representing Currency.
     * @record
     */
    function Currency() { }
    Occ.Currency = Currency;
    if (false) {
        /**
         * \@member {boolean} [active]
         * @type {?|undefined}
         */
        Currency.prototype.active;
        /**
         * \@member {string} [isocode]
         * @type {?|undefined}
         */
        Currency.prototype.isocode;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Currency.prototype.name;
        /**
         * \@member {string} [symbol]
         * @type {?|undefined}
         */
        Currency.prototype.symbol;
    }
    /**
     *
     * An interface representing Voucher.
     * @record
     */
    function Voucher() { }
    Occ.Voucher = Voucher;
    if (false) {
        /**
         * \@member {Price} [appliedValue]
         * @type {?|undefined}
         */
        Voucher.prototype.appliedValue;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Voucher.prototype.code;
        /**
         * \@member {Currency} [currency]
         * @type {?|undefined}
         */
        Voucher.prototype.currency;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        Voucher.prototype.description;
        /**
         * \@member {boolean} [freeShipping]
         * @type {?|undefined}
         */
        Voucher.prototype.freeShipping;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Voucher.prototype.name;
        /**
         * \@member {number} [value]
         * @type {?|undefined}
         */
        Voucher.prototype.value;
        /**
         * \@member {string} [valueFormatted]
         * @type {?|undefined}
         */
        Voucher.prototype.valueFormatted;
        /**
         * \@member {string} [valueString]
         * @type {?|undefined}
         */
        Voucher.prototype.valueString;
        /**
         * \@member {string} [voucherCode]
         * @type {?|undefined}
         */
        Voucher.prototype.voucherCode;
    }
    /**
     *
     * An interface representing DeliveryMode.
     * @record
     */
    function DeliveryMode() { }
    Occ.DeliveryMode = DeliveryMode;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        DeliveryMode.prototype.code;
        /**
         * \@member {Price} [deliveryCost]
         * @type {?|undefined}
         */
        DeliveryMode.prototype.deliveryCost;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        DeliveryMode.prototype.description;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        DeliveryMode.prototype.name;
    }
    /**
     *
     * An interface representing GeoPoint.
     * @record
     */
    function GeoPoint() { }
    Occ.GeoPoint = GeoPoint;
    if (false) {
        /**
         * \@member {number} [latitude]
         * @type {?|undefined}
         */
        GeoPoint.prototype.latitude;
        /**
         * \@member {number} [longitude]
         * @type {?|undefined}
         */
        GeoPoint.prototype.longitude;
    }
    /**
     *
     * An interface representing Time.
     * @record
     */
    function Time() { }
    Occ.Time = Time;
    if (false) {
        /**
         * \@member {string} [formattedHour]
         * @type {?|undefined}
         */
        Time.prototype.formattedHour;
        /**
         * \@member {number} [hour]
         * @type {?|undefined}
         */
        Time.prototype.hour;
        /**
         * \@member {number} [minute]
         * @type {?|undefined}
         */
        Time.prototype.minute;
    }
    /**
     *
     * An interface representing SpecialOpeningDay.
     * @record
     */
    function SpecialOpeningDay() { }
    Occ.SpecialOpeningDay = SpecialOpeningDay;
    if (false) {
        /**
         * \@member {boolean} [closed]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.closed;
        /**
         * \@member {Time} [closingTime]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.closingTime;
        /**
         * \@member {string} [comment]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.comment;
        /**
         * \@member {Date} [date]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.date;
        /**
         * \@member {string} [formattedDate]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.formattedDate;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.name;
        /**
         * \@member {Time} [openingTime]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.openingTime;
    }
    /**
     *
     * An interface representing WeekdayOpeningDay.
     * @record
     */
    function WeekdayOpeningDay() { }
    Occ.WeekdayOpeningDay = WeekdayOpeningDay;
    if (false) {
        /**
         * \@member {boolean} [closed]
         * @type {?|undefined}
         */
        WeekdayOpeningDay.prototype.closed;
        /**
         * \@member {Time} [closingTime]
         * @type {?|undefined}
         */
        WeekdayOpeningDay.prototype.closingTime;
        /**
         * \@member {Time} [openingTime]
         * @type {?|undefined}
         */
        WeekdayOpeningDay.prototype.openingTime;
        /**
         * \@member {string} [weekDay]
         * @type {?|undefined}
         */
        WeekdayOpeningDay.prototype.weekDay;
    }
    /**
     *
     * An interface representing OpeningSchedule.
     * @record
     */
    function OpeningSchedule() { }
    Occ.OpeningSchedule = OpeningSchedule;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        OpeningSchedule.prototype.code;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        OpeningSchedule.prototype.name;
        /**
         * \@member {SpecialOpeningDay[]} [specialDayOpeningList]
         * @type {?|undefined}
         */
        OpeningSchedule.prototype.specialDayOpeningList;
        /**
         * \@member {WeekdayOpeningDay[]} [weekDayOpeningList]
         * @type {?|undefined}
         */
        OpeningSchedule.prototype.weekDayOpeningList;
    }
    /**
     *
     * An interface representing PointOfService.
     * @record
     */
    function PointOfService() { }
    Occ.PointOfService = PointOfService;
    if (false) {
        /**
         * \@member {Address} [address]
         * @type {?|undefined}
         */
        PointOfService.prototype.address;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        PointOfService.prototype.description;
        /**
         * \@member {string} [displayName]
         * @type {?|undefined}
         */
        PointOfService.prototype.displayName;
        /**
         * \@member {number} [distanceKm]
         * @type {?|undefined}
         */
        PointOfService.prototype.distanceKm;
        /**
         * \@member {{ [propertyName: string]: string }} [features]
         * @type {?|undefined}
         */
        PointOfService.prototype.features;
        /**
         * \@member {string} [formattedDistance]
         * @type {?|undefined}
         */
        PointOfService.prototype.formattedDistance;
        /**
         * \@member {GeoPoint} [geoPoint]
         * @type {?|undefined}
         */
        PointOfService.prototype.geoPoint;
        /**
         * \@member {Image} [mapIcon]
         * @type {?|undefined}
         */
        PointOfService.prototype.mapIcon;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        PointOfService.prototype.name;
        /**
         * \@member {OpeningSchedule} [openingHours]
         * @type {?|undefined}
         */
        PointOfService.prototype.openingHours;
        /**
         * \@member {string} [storeContent]
         * @type {?|undefined}
         */
        PointOfService.prototype.storeContent;
        /**
         * \@member {Image[]} [storeImages]
         * @type {?|undefined}
         */
        PointOfService.prototype.storeImages;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        PointOfService.prototype.url;
    }
    /**
     *
     * An interface representing Category.
     * @record
     */
    function Category() { }
    Occ.Category = Category;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Category.prototype.code;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Category.prototype.name;
        /**
         * \@member {Image} [image]
         * @type {?|undefined}
         */
        Category.prototype.image;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        Category.prototype.url;
    }
    /**
     *
     * An interface representing FeatureUnit.
     * @record
     */
    function FeatureUnit() { }
    Occ.FeatureUnit = FeatureUnit;
    if (false) {
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        FeatureUnit.prototype.name;
        /**
         * \@member {string} [symbol]
         * @type {?|undefined}
         */
        FeatureUnit.prototype.symbol;
        /**
         * \@member {string} [unitType]
         * @type {?|undefined}
         */
        FeatureUnit.prototype.unitType;
    }
    /**
     *
     * An interface representing FeatureValue.
     * @record
     */
    function FeatureValue() { }
    Occ.FeatureValue = FeatureValue;
    if (false) {
        /**
         * \@member {string} [value]
         * @type {?|undefined}
         */
        FeatureValue.prototype.value;
    }
    /**
     *
     * An interface representing Feature.
     * @record
     */
    function Feature() { }
    Occ.Feature = Feature;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Feature.prototype.code;
        /**
         * \@member {boolean} [comparable]
         * @type {?|undefined}
         */
        Feature.prototype.comparable;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        Feature.prototype.description;
        /**
         * \@member {FeatureUnit} [featureUnit]
         * @type {?|undefined}
         */
        Feature.prototype.featureUnit;
        /**
         * \@member {FeatureValue[]} [featureValues]
         * @type {?|undefined}
         */
        Feature.prototype.featureValues;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Feature.prototype.name;
        /**
         * \@member {boolean} [range]
         * @type {?|undefined}
         */
        Feature.prototype.range;
        /**
         * \@member {string} [type]
         * @type {?|undefined}
         */
        Feature.prototype.type;
    }
    /**
     *
     * An interface representing Classification.
     * @record
     */
    function Classification() { }
    Occ.Classification = Classification;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Classification.prototype.code;
        /**
         * \@member {Feature[]} [features]
         * @type {?|undefined}
         */
        Classification.prototype.features;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Classification.prototype.name;
    }
    /**
     *
     * An interface representing FutureStock.
     * @record
     */
    function FutureStock() { }
    Occ.FutureStock = FutureStock;
    if (false) {
        /**
         * \@member {Date} [date]
         * @type {?|undefined}
         */
        FutureStock.prototype.date;
        /**
         * \@member {string} [formattedDate]
         * @type {?|undefined}
         */
        FutureStock.prototype.formattedDate;
        /**
         * \@member {Stock} [stock]
         * @type {?|undefined}
         */
        FutureStock.prototype.stock;
    }
    /**
     *
     * An interface representing PriceRange.
     * @record
     */
    function PriceRange() { }
    Occ.PriceRange = PriceRange;
    if (false) {
        /**
         * \@member {Price} [maxPrice]
         * @type {?|undefined}
         */
        PriceRange.prototype.maxPrice;
        /**
         * \@member {Price} [minPrice]
         * @type {?|undefined}
         */
        PriceRange.prototype.minPrice;
    }
    /**
     *
     * An interface representing ProductReference.
     * @record
     */
    function ProductReference() { }
    Occ.ProductReference = ProductReference;
    if (false) {
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        ProductReference.prototype.description;
        /**
         * \@member {boolean} [preselected]
         * @type {?|undefined}
         */
        ProductReference.prototype.preselected;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        ProductReference.prototype.quantity;
        /**
         * \@member {string} [referenceType]
         * @type {?|undefined}
         */
        ProductReference.prototype.referenceType;
        /**
         * \@member {Product} [target]
         * @type {?|undefined}
         */
        ProductReference.prototype.target;
    }
    /**
     *
     * An interface representing Language.
     * @record
     */
    function Language() { }
    Occ.Language = Language;
    if (false) {
        /**
         * \@member {boolean} [active]
         * @type {?|undefined}
         */
        Language.prototype.active;
        /**
         * \@member {string} [isocode]
         * @type {?|undefined}
         */
        Language.prototype.isocode;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Language.prototype.name;
        /**
         * \@member {string} [nativeName]
         * @type {?|undefined}
         */
        Language.prototype.nativeName;
    }
    /**
     *
     * An interface representing User.
     * @record
     */
    function User() { }
    Occ.User = User;
    if (false) {
        /**
         * \@member {Currency} [currency]
         * @type {?|undefined}
         */
        User.prototype.currency;
        /**
         * \@member {string} [customerId]
         * @type {?|undefined}
         */
        User.prototype.customerId;
        /**
         * \@member {Date} [deactivationDate]
         * @type {?|undefined}
         */
        User.prototype.deactivationDate;
        /**
         * \@member {Address} [defaultAddress]
         * @type {?|undefined}
         */
        User.prototype.defaultAddress;
        /**
         * \@member {string} [displayUid]
         * @type {?|undefined}
         */
        User.prototype.displayUid;
        /**
         * \@member {string} [firstName]
         * @type {?|undefined}
         */
        User.prototype.firstName;
        /**
         * \@member {Language} [language]
         * @type {?|undefined}
         */
        User.prototype.language;
        /**
         * \@member {string} [lastName]
         * @type {?|undefined}
         */
        User.prototype.lastName;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        User.prototype.name;
        /**
         * \@member {string} [title]
         * @type {?|undefined}
         */
        User.prototype.title;
        /**
         * \@member {string} [titleCode]
         * @type {?|undefined}
         */
        User.prototype.titleCode;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        User.prototype.uid;
    }
    /**
     *
     * An interface representing Review.
     * @record
     */
    function Review() { }
    Occ.Review = Review;
    if (false) {
        /**
         * \@member {string} [alias]
         * @type {?|undefined}
         */
        Review.prototype.alias;
        /**
         * \@member {string} [comment]
         * @type {?|undefined}
         */
        Review.prototype.comment;
        /**
         * \@member {Date} [date]
         * @type {?|undefined}
         */
        Review.prototype.date;
        /**
         * \@member {string} [headline]
         * @type {?|undefined}
         */
        Review.prototype.headline;
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        Review.prototype.id;
        /**
         * \@member {User} [principal]
         * @type {?|undefined}
         */
        Review.prototype.principal;
        /**
         * \@member {number} [rating]
         * @type {?|undefined}
         */
        Review.prototype.rating;
    }
    /**
     *
     * An interface representing VariantCategory.
     * @record
     */
    function VariantCategory() { }
    Occ.VariantCategory = VariantCategory;
    if (false) {
        /**
         * \@member {boolean} [hasImage]
         * @type {?|undefined}
         */
        VariantCategory.prototype.hasImage;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        VariantCategory.prototype.name;
        /**
         * \@member {number} [priority]
         * @type {?|undefined}
         */
        VariantCategory.prototype.priority;
    }
    /**
     *
     * An interface representing VariantValueCategory.
     * @record
     */
    function VariantValueCategory() { }
    Occ.VariantValueCategory = VariantValueCategory;
    if (false) {
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        VariantValueCategory.prototype.name;
        /**
         * \@member {number} [sequence]
         * @type {?|undefined}
         */
        VariantValueCategory.prototype.sequence;
        /**
         * \@member {VariantCategory[]} [superCategories]
         * @type {?|undefined}
         */
        VariantValueCategory.prototype.superCategories;
    }
    /**
     *
     * An interface representing VariantMatrixElement.
     * @record
     */
    function VariantMatrixElement() { }
    Occ.VariantMatrixElement = VariantMatrixElement;
    if (false) {
        /**
         * \@member {VariantMatrixElement[]} [elements]
         * @type {?|undefined}
         */
        VariantMatrixElement.prototype.elements;
        /**
         * \@member {boolean} [isLeaf]
         * @type {?|undefined}
         */
        VariantMatrixElement.prototype.isLeaf;
        /**
         * \@member {VariantCategory} [parentVariantCategory]
         * @type {?|undefined}
         */
        VariantMatrixElement.prototype.parentVariantCategory;
        /**
         * \@member {VariantOption} [variantOption]
         * @type {?|undefined}
         */
        VariantMatrixElement.prototype.variantOption;
        /**
         * \@member {VariantValueCategory} [variantValueCategory]
         * @type {?|undefined}
         */
        VariantMatrixElement.prototype.variantValueCategory;
    }
    /**
     *
     * An interface representing Product.
     * @record
     */
    function Product() { }
    Occ.Product = Product;
    if (false) {
        /**
         * \@member {boolean} [availableForPickup]
         * @type {?|undefined}
         */
        Product.prototype.availableForPickup;
        /**
         * \@member {number} [averageRating]
         * @type {?|undefined}
         */
        Product.prototype.averageRating;
        /**
         * \@member {BaseOption[]} [baseOptions]
         * @type {?|undefined}
         */
        Product.prototype.baseOptions;
        /**
         * \@member {string} [baseProduct]
         * @type {?|undefined}
         */
        Product.prototype.baseProduct;
        /**
         * \@member {Category[]} [categories]
         * @type {?|undefined}
         */
        Product.prototype.categories;
        /**
         * \@member {Classification[]} [classifications]
         * @type {?|undefined}
         */
        Product.prototype.classifications;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Product.prototype.code;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        Product.prototype.description;
        /**
         * \@member {FutureStock[]} [futureStocks]
         * @type {?|undefined}
         */
        Product.prototype.futureStocks;
        /**
         * \@member {Image[]} [images]
         * @type {?|undefined}
         */
        Product.prototype.images;
        /**
         * \@member {string} [manufacturer]
         * @type {?|undefined}
         */
        Product.prototype.manufacturer;
        /**
         * \@member {boolean} [multidimensional]
         * @type {?|undefined}
         */
        Product.prototype.multidimensional;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Product.prototype.name;
        /**
         * \@member {number} [numberOfReviews]
         * @type {?|undefined}
         */
        Product.prototype.numberOfReviews;
        /**
         * \@member {Promotion[]} [potentialPromotions]
         * @type {?|undefined}
         */
        Product.prototype.potentialPromotions;
        /**
         * \@member {Price} [price]
         * @type {?|undefined}
         */
        Product.prototype.price;
        /**
         * \@member {PriceRange} [priceRange]
         * @type {?|undefined}
         */
        Product.prototype.priceRange;
        /**
         * \@member {ProductReference[]} [productReferences]
         * @type {?|undefined}
         */
        Product.prototype.productReferences;
        /**
         * \@member {boolean} [purchasable]
         * @type {?|undefined}
         */
        Product.prototype.purchasable;
        /**
         * \@member {Review[]} [reviews]
         * @type {?|undefined}
         */
        Product.prototype.reviews;
        /**
         * \@member {Stock} [stock]
         * @type {?|undefined}
         */
        Product.prototype.stock;
        /**
         * \@member {string} [summary]
         * @type {?|undefined}
         */
        Product.prototype.summary;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        Product.prototype.url;
        /**
         * \@member {VariantMatrixElement[]} [variantMatrix]
         * @type {?|undefined}
         */
        Product.prototype.variantMatrix;
        /**
         * \@member {VariantOption[]} [variantOptions]
         * @type {?|undefined}
         */
        Product.prototype.variantOptions;
        /**
         * \@member {string} [variantType]
         * @type {?|undefined}
         */
        Product.prototype.variantType;
        /**
         * \@member {Price[]} [volumePrices]
         * @type {?|undefined}
         */
        Product.prototype.volumePrices;
        /**
         * \@member {boolean} [volumePricesFlag]
         * @type {?|undefined}
         */
        Product.prototype.volumePricesFlag;
    }
    /**
     *
     * An interface representing OrderEntry.
     * @record
     */
    function OrderEntry() { }
    Occ.OrderEntry = OrderEntry;
    if (false) {
        /**
         * \@member {Price} [basePrice]
         * @type {?|undefined}
         */
        OrderEntry.prototype.basePrice;
        /**
         * \@member {DeliveryMode} [deliveryMode]
         * @type {?|undefined}
         */
        OrderEntry.prototype.deliveryMode;
        /**
         * \@member {PointOfService} [deliveryPointOfService]
         * @type {?|undefined}
         */
        OrderEntry.prototype.deliveryPointOfService;
        /**
         * \@member {number} [entryNumber]
         * @type {?|undefined}
         */
        OrderEntry.prototype.entryNumber;
        /**
         * \@member {Product} [product]
         * @type {?|undefined}
         */
        OrderEntry.prototype.product;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        OrderEntry.prototype.quantity;
        /**
         * \@member {Price} [totalPrice]
         * @type {?|undefined}
         */
        OrderEntry.prototype.totalPrice;
        /**
         * \@member {boolean} [updateable]
         * @type {?|undefined}
         */
        OrderEntry.prototype.updateable;
    }
    /**
     *
     * An interface representing DeliveryOrderEntryGroup.
     * @record
     */
    function DeliveryOrderEntryGroup() { }
    Occ.DeliveryOrderEntryGroup = DeliveryOrderEntryGroup;
    if (false) {
        /**
         * \@member {Address} [deliveryAddress]
         * @type {?|undefined}
         */
        DeliveryOrderEntryGroup.prototype.deliveryAddress;
        /**
         * \@member {OrderEntry[]} [entries]
         * @type {?|undefined}
         */
        DeliveryOrderEntryGroup.prototype.entries;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        DeliveryOrderEntryGroup.prototype.quantity;
        /**
         * \@member {Price} [totalPriceWithTax]
         * @type {?|undefined}
         */
        DeliveryOrderEntryGroup.prototype.totalPriceWithTax;
    }
    /**
     *
     * An interface representing PaymentDetails.
     * @record
     */
    function PaymentDetails() { }
    Occ.PaymentDetails = PaymentDetails;
    if (false) {
        /**
         * \@member {string} [accountHolderName]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.accountHolderName;
        /**
         * \@member {Address} [billingAddress]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.billingAddress;
        /**
         * \@member {string} [cardNumber]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.cardNumber;
        /**
         * \@member {CardType} [cardType]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.cardType;
        /**
         * \@member {string} [cvn]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.cvn;
        /**
         * \@member {boolean} [defaultPayment]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.defaultPayment;
        /**
         * \@member {string} [expiryMonth]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.expiryMonth;
        /**
         * \@member {string} [expiryYear]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.expiryYear;
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.id;
        /**
         * \@member {string} [issueNumber]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.issueNumber;
        /**
         * \@member {boolean} [saved]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.saved;
        /**
         * \@member {string} [startMonth]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.startMonth;
        /**
         * \@member {string} [startYear]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.startYear;
        /**
         * \@member {string} [subscriptionId]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.subscriptionId;
    }
    /**
     *
     * An interface representing PickupOrderEntryGroup.
     * @record
     */
    function PickupOrderEntryGroup() { }
    Occ.PickupOrderEntryGroup = PickupOrderEntryGroup;
    if (false) {
        /**
         * \@member {PointOfService} [deliveryPointOfService]
         * @type {?|undefined}
         */
        PickupOrderEntryGroup.prototype.deliveryPointOfService;
        /**
         * \@member {number} [distance]
         * @type {?|undefined}
         */
        PickupOrderEntryGroup.prototype.distance;
        /**
         * \@member {OrderEntry[]} [entries]
         * @type {?|undefined}
         */
        PickupOrderEntryGroup.prototype.entries;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        PickupOrderEntryGroup.prototype.quantity;
        /**
         * \@member {Price} [totalPriceWithTax]
         * @type {?|undefined}
         */
        PickupOrderEntryGroup.prototype.totalPriceWithTax;
    }
    /**
     *
     * An interface representing Principal.
     * @record
     */
    function Principal() { }
    Occ.Principal = Principal;
    if (false) {
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Principal.prototype.name;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        Principal.prototype.uid;
    }
    /**
     *
     * An interface representing Cart.
     * @record
     */
    function Cart() { }
    Occ.Cart = Cart;
    if (false) {
        /**
         * \@member {PromotionResult[]} [appliedOrderPromotions]
         * @type {?|undefined}
         */
        Cart.prototype.appliedOrderPromotions;
        /**
         * \@member {PromotionResult[]} [appliedProductPromotions]
         * @type {?|undefined}
         */
        Cart.prototype.appliedProductPromotions;
        /**
         * \@member {Voucher[]} [appliedVouchers]
         * @type {?|undefined}
         */
        Cart.prototype.appliedVouchers;
        /**
         * \@member {boolean} [calculated]
         * @type {?|undefined}
         */
        Cart.prototype.calculated;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Cart.prototype.code;
        /**
         * \@member {Address} [deliveryAddress]
         * @type {?|undefined}
         */
        Cart.prototype.deliveryAddress;
        /**
         * \@member {Price} [deliveryCost]
         * @type {?|undefined}
         */
        Cart.prototype.deliveryCost;
        /**
         * \@member {number} [deliveryItemsQuantity]
         * @type {?|undefined}
         */
        Cart.prototype.deliveryItemsQuantity;
        /**
         * \@member {DeliveryMode} [deliveryMode]
         * @type {?|undefined}
         */
        Cart.prototype.deliveryMode;
        /**
         * \@member {DeliveryOrderEntryGroup[]} [deliveryOrderGroups]
         * @type {?|undefined}
         */
        Cart.prototype.deliveryOrderGroups;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        Cart.prototype.description;
        /**
         * \@member {OrderEntry[]} [entries]
         * @type {?|undefined}
         */
        Cart.prototype.entries;
        /**
         * \@member {Date} [expirationTime]
         * @type {?|undefined}
         */
        Cart.prototype.expirationTime;
        /**
         * \@member {string} [guid]
         * @type {?|undefined}
         */
        Cart.prototype.guid;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Cart.prototype.name;
        /**
         * \@member {boolean} [net]
         * @type {?|undefined}
         */
        Cart.prototype.net;
        /**
         * \@member {Price} [orderDiscounts]
         * @type {?|undefined}
         */
        Cart.prototype.orderDiscounts;
        /**
         * \@member {PaymentDetails} [paymentInfo]
         * @type {?|undefined}
         */
        Cart.prototype.paymentInfo;
        /**
         * \@member {number} [pickupItemsQuantity]
         * @type {?|undefined}
         */
        Cart.prototype.pickupItemsQuantity;
        /**
         * \@member {PickupOrderEntryGroup[]} [pickupOrderGroups]
         * @type {?|undefined}
         */
        Cart.prototype.pickupOrderGroups;
        /**
         * \@member {PromotionResult[]} [potentialOrderPromotions]
         * @type {?|undefined}
         */
        Cart.prototype.potentialOrderPromotions;
        /**
         * \@member {PromotionResult[]} [potentialProductPromotions]
         * @type {?|undefined}
         */
        Cart.prototype.potentialProductPromotions;
        /**
         * \@member {Price} [productDiscounts]
         * @type {?|undefined}
         */
        Cart.prototype.productDiscounts;
        /**
         * \@member {Date} [saveTime]
         * @type {?|undefined}
         */
        Cart.prototype.saveTime;
        /**
         * \@member {Principal} [savedBy]
         * @type {?|undefined}
         */
        Cart.prototype.savedBy;
        /**
         * \@member {string} [site]
         * @type {?|undefined}
         */
        Cart.prototype.site;
        /**
         * \@member {string} [store]
         * @type {?|undefined}
         */
        Cart.prototype.store;
        /**
         * \@member {Price} [subTotal]
         * @type {?|undefined}
         */
        Cart.prototype.subTotal;
        /**
         * \@member {Price} [totalDiscounts]
         * @type {?|undefined}
         */
        Cart.prototype.totalDiscounts;
        /**
         * \@member {number} [totalItems]
         * @type {?|undefined}
         */
        Cart.prototype.totalItems;
        /**
         * \@member {Price} [totalPrice]
         * @type {?|undefined}
         */
        Cart.prototype.totalPrice;
        /**
         * \@member {Price} [totalPriceWithTax]
         * @type {?|undefined}
         */
        Cart.prototype.totalPriceWithTax;
        /**
         * \@member {Price} [totalTax]
         * @type {?|undefined}
         */
        Cart.prototype.totalTax;
        /**
         * \@member {number} [totalUnitCount]
         * @type {?|undefined}
         */
        Cart.prototype.totalUnitCount;
        /**
         * \@member {Principal} [user]
         * @type {?|undefined}
         */
        Cart.prototype.user;
    }
    /**
     *
     * An interface representing CartList.
     * @record
     */
    function CartList() { }
    Occ.CartList = CartList;
    if (false) {
        /**
         * \@member {Cart[]} [carts]
         * @type {?|undefined}
         */
        CartList.prototype.carts;
    }
    /**
     *
     * An interface representing CartModification.
     * @record
     */
    function CartModification() { }
    Occ.CartModification = CartModification;
    if (false) {
        /**
         * \@member {boolean} [deliveryModeChanged]
         * @type {?|undefined}
         */
        CartModification.prototype.deliveryModeChanged;
        /**
         * \@member {OrderEntry} [entry]
         * @type {?|undefined}
         */
        CartModification.prototype.entry;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        CartModification.prototype.quantity;
        /**
         * \@member {number} [quantityAdded]
         * @type {?|undefined}
         */
        CartModification.prototype.quantityAdded;
        /**
         * \@member {string} [statusCode]
         * @type {?|undefined}
         */
        CartModification.prototype.statusCode;
        /**
         * \@member {string} [statusMessage]
         * @type {?|undefined}
         */
        CartModification.prototype.statusMessage;
    }
    /**
     *
     * An interface representing CategoryHierarchy.
     * @record
     */
    function CategoryHierarchy() { }
    Occ.CategoryHierarchy = CategoryHierarchy;
    if (false) {
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        CategoryHierarchy.prototype.id;
        /**
         * \@member {Date} [lastModified]
         * @type {?|undefined}
         */
        CategoryHierarchy.prototype.lastModified;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        CategoryHierarchy.prototype.name;
        /**
         * \@member {CategoryHierarchy[]} [subcategories]
         * @type {?|undefined}
         */
        CategoryHierarchy.prototype.subcategories;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        CategoryHierarchy.prototype.url;
    }
    /**
     *
     * An interface representing CatalogVersion.
     * @record
     */
    function CatalogVersion() { }
    Occ.CatalogVersion = CatalogVersion;
    if (false) {
        /**
         * \@member {CategoryHierarchy[]} [categories]
         * @type {?|undefined}
         */
        CatalogVersion.prototype.categories;
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        CatalogVersion.prototype.id;
        /**
         * \@member {Date} [lastModified]
         * @type {?|undefined}
         */
        CatalogVersion.prototype.lastModified;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        CatalogVersion.prototype.name;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        CatalogVersion.prototype.url;
    }
    /**
     *
     * An interface representing Catalog.
     * @record
     */
    function Catalog() { }
    Occ.Catalog = Catalog;
    if (false) {
        /**
         * \@member {CatalogVersion[]} [catalogVersions]
         * @type {?|undefined}
         */
        Catalog.prototype.catalogVersions;
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        Catalog.prototype.id;
        /**
         * \@member {Date} [lastModified]
         * @type {?|undefined}
         */
        Catalog.prototype.lastModified;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Catalog.prototype.name;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        Catalog.prototype.url;
    }
    /**
     *
     * An interface representing CatalogList.
     * @record
     */
    function CatalogList() { }
    Occ.CatalogList = CatalogList;
    if (false) {
        /**
         * \@member {Catalog[]} [catalogs]
         * @type {?|undefined}
         */
        CatalogList.prototype.catalogs;
    }
    /**
     *
     * An interface representing ComponentIDList.
     * @record
     */
    function ComponentIDList() { }
    Occ.ComponentIDList = ComponentIDList;
    if (false) {
        /**
         * \@member {string[]} [idList]
         * @type {?|undefined}
         */
        ComponentIDList.prototype.idList;
    }
    /**
     *
     * An interface representing ConsignmentEntry.
     * @record
     */
    function ConsignmentEntry() { }
    Occ.ConsignmentEntry = ConsignmentEntry;
    if (false) {
        /**
         * \@member {OrderEntry} [orderEntry]
         * @type {?|undefined}
         */
        ConsignmentEntry.prototype.orderEntry;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        ConsignmentEntry.prototype.quantity;
        /**
         * \@member {number} [shippedQuantity]
         * @type {?|undefined}
         */
        ConsignmentEntry.prototype.shippedQuantity;
    }
    /**
     *
     * An interface representing Consignment.
     * @record
     */
    function Consignment() { }
    Occ.Consignment = Consignment;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Consignment.prototype.code;
        /**
         * \@member {PointOfService} [deliveryPointOfService]
         * @type {?|undefined}
         */
        Consignment.prototype.deliveryPointOfService;
        /**
         * \@member {ConsignmentEntry[]} [entries]
         * @type {?|undefined}
         */
        Consignment.prototype.entries;
        /**
         * \@member {Address} [shippingAddress]
         * @type {?|undefined}
         */
        Consignment.prototype.shippingAddress;
        /**
         * \@member {string} [status]
         * @type {?|undefined}
         */
        Consignment.prototype.status;
        /**
         * \@member {Date} [statusDate]
         * @type {?|undefined}
         */
        Consignment.prototype.statusDate;
        /**
         * \@member {string} [trackingID]
         * @type {?|undefined}
         */
        Consignment.prototype.trackingID;
    }
    /**
     *
     * An interface representing CountryList.
     * @record
     */
    function CountryList() { }
    Occ.CountryList = CountryList;
    if (false) {
        /**
         * \@member {Country[]} [countries]
         * @type {?|undefined}
         */
        CountryList.prototype.countries;
    }
    /**
     *
     * An interface representing CurrencyList.
     * @record
     */
    function CurrencyList() { }
    Occ.CurrencyList = CurrencyList;
    if (false) {
        /**
         * \@member {Currency[]} [currencies]
         * @type {?|undefined}
         */
        CurrencyList.prototype.currencies;
    }
    /**
     *
     * An interface representing DeliveryModeList.
     * @record
     */
    function DeliveryModeList() { }
    Occ.DeliveryModeList = DeliveryModeList;
    if (false) {
        /**
         * \@member {DeliveryMode[]} [deliveryModes]
         * @type {?|undefined}
         */
        DeliveryModeList.prototype.deliveryModes;
    }
    /**
     *
     * An interface representing FacetValue.
     * @record
     */
    function FacetValue() { }
    Occ.FacetValue = FacetValue;
    if (false) {
        /**
         * \@member {number} [count]
         * @type {?|undefined}
         */
        FacetValue.prototype.count;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        FacetValue.prototype.name;
        /**
         * \@member {SearchState} [query]
         * @type {?|undefined}
         */
        FacetValue.prototype.query;
        /**
         * \@member {boolean} [selected]
         * @type {?|undefined}
         */
        FacetValue.prototype.selected;
    }
    /**
     *
     * An interface representing Facet.
     * @record
     */
    function Facet() { }
    Occ.Facet = Facet;
    if (false) {
        /**
         * \@member {boolean} [category]
         * @type {?|undefined}
         */
        Facet.prototype.category;
        /**
         * \@member {boolean} [multiSelect]
         * @type {?|undefined}
         */
        Facet.prototype.multiSelect;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Facet.prototype.name;
        /**
         * \@member {number} [priority]
         * @type {?|undefined}
         */
        Facet.prototype.priority;
        /**
         * \@member {FacetValue[]} [topValues]
         * @type {?|undefined}
         */
        Facet.prototype.topValues;
        /**
         * \@member {FacetValue[]} [values]
         * @type {?|undefined}
         */
        Facet.prototype.values;
        /**
         * \@member {boolean} [visible]
         * @type {?|undefined}
         */
        Facet.prototype.visible;
    }
    /**
     *
     * An interface representing LanguageList.
     * @record
     */
    function LanguageList() { }
    Occ.LanguageList = LanguageList;
    if (false) {
        /**
         * \@member {Language[]} [languages]
         * @type {?|undefined}
         */
        LanguageList.prototype.languages;
    }
    /**
     *
     * An interface representing Pagination.
     * Pagination info
     *
     * @record
     */
    function Pagination() { }
    Occ.Pagination = Pagination;
    if (false) {
        /**
         * \@member {number} [count] Number of elements on this page
         * @type {?|undefined}
         */
        Pagination.prototype.count;
        /**
         * \@member {number} [page] Current page number
         * @type {?|undefined}
         */
        Pagination.prototype.page;
        /**
         * \@member {number} [totalCount] Total number of elements
         * @type {?|undefined}
         */
        Pagination.prototype.totalCount;
        /**
         * \@member {number} [totalPages] Total number of pages
         * @type {?|undefined}
         */
        Pagination.prototype.totalPages;
    }
    /**
     *
     * An interface representing Sort.
     * Sort option
     *
     * @record
     */
    function Sort() { }
    Occ.Sort = Sort;
    if (false) {
        /**
         * \@member {boolean} [asc]
         * @type {?|undefined}
         */
        Sort.prototype.asc;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Sort.prototype.code;
    }
    /**
     *
     * An interface representing ListAdaptedComponents.
     * @record
     */
    function ListAdaptedComponents() { }
    Occ.ListAdaptedComponents = ListAdaptedComponents;
    if (false) {
        /**
         * \@member {any[]} [components]
         * @type {?|undefined}
         */
        ListAdaptedComponents.prototype.components;
        /**
         * \@member {Pagination} [pagination]
         * @type {?|undefined}
         */
        ListAdaptedComponents.prototype.pagination;
        /**
         * \@member {Sort[]} [sorts]
         * @type {?|undefined}
         */
        ListAdaptedComponents.prototype.sorts;
    }
    /**
     *
     * An interface representing MemberList.
     * @record
     */
    function MemberList() { }
    Occ.MemberList = MemberList;
    if (false) {
        /**
         * \@member {Principal[]} [members]
         * @type {?|undefined}
         */
        MemberList.prototype.members;
    }
    /**
     *
     * An interface representing OrderEntryList.
     * @record
     */
    function OrderEntryList() { }
    Occ.OrderEntryList = OrderEntryList;
    if (false) {
        /**
         * \@member {OrderEntry[]} [orderEntries]
         * @type {?|undefined}
         */
        OrderEntryList.prototype.orderEntries;
    }
    /**
     *
     * An interface representing OrderHistory.
     * @record
     */
    function OrderHistory() { }
    Occ.OrderHistory = OrderHistory;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        OrderHistory.prototype.code;
        /**
         * \@member {string} [guid]
         * @type {?|undefined}
         */
        OrderHistory.prototype.guid;
        /**
         * \@member {Date} [placed]
         * @type {?|undefined}
         */
        OrderHistory.prototype.placed;
        /**
         * \@member {string} [status]
         * @type {?|undefined}
         */
        OrderHistory.prototype.status;
        /**
         * \@member {string} [statusDisplay]
         * @type {?|undefined}
         */
        OrderHistory.prototype.statusDisplay;
        /**
         * \@member {Price} [total]
         * @type {?|undefined}
         */
        OrderHistory.prototype.total;
    }
    /**
     *
     * An interface representing PaginationModel.
     * @record
     */
    function PaginationModel() { }
    Occ.PaginationModel = PaginationModel;
    if (false) {
        /**
         * \@member {number} [currentPage]
         * @type {?|undefined}
         */
        PaginationModel.prototype.currentPage;
        /**
         * \@member {number} [pageSize]
         * @type {?|undefined}
         */
        PaginationModel.prototype.pageSize;
        /**
         * \@member {string} [sort]
         * @type {?|undefined}
         */
        PaginationModel.prototype.sort;
        /**
         * \@member {number} [totalPages]
         * @type {?|undefined}
         */
        PaginationModel.prototype.totalPages;
        /**
         * \@member {number} [totalResults]
         * @type {?|undefined}
         */
        PaginationModel.prototype.totalResults;
    }
    /**
     *
     * An interface representing SortModel.
     * @record
     */
    function SortModel() { }
    Occ.SortModel = SortModel;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        SortModel.prototype.code;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        SortModel.prototype.name;
        /**
         * \@member {boolean} [selected]
         * @type {?|undefined}
         */
        SortModel.prototype.selected;
    }
    /**
     *
     * An interface representing OrderHistoryList.
     * @record
     */
    function OrderHistoryList() { }
    Occ.OrderHistoryList = OrderHistoryList;
    if (false) {
        /**
         * \@member {OrderHistory[]} [orders]
         * @type {?|undefined}
         */
        OrderHistoryList.prototype.orders;
        /**
         * \@member {PaginationModel} [pagination]
         * @type {?|undefined}
         */
        OrderHistoryList.prototype.pagination;
        /**
         * \@member {SortModel[]} [sorts]
         * @type {?|undefined}
         */
        OrderHistoryList.prototype.sorts;
    }
    /**
     *
     * An interface representing OrderStatusUpdateElement.
     * @record
     */
    function OrderStatusUpdateElement() { }
    Occ.OrderStatusUpdateElement = OrderStatusUpdateElement;
    if (false) {
        /**
         * \@member {string} [baseSiteId]
         * @type {?|undefined}
         */
        OrderStatusUpdateElement.prototype.baseSiteId;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        OrderStatusUpdateElement.prototype.code;
        /**
         * \@member {string} [status]
         * @type {?|undefined}
         */
        OrderStatusUpdateElement.prototype.status;
    }
    /**
     *
     * An interface representing OrderStatusUpdateElementList.
     * @record
     */
    function OrderStatusUpdateElementList() { }
    Occ.OrderStatusUpdateElementList = OrderStatusUpdateElementList;
    if (false) {
        /**
         * \@member {OrderStatusUpdateElement[]} [orderStatusUpdateElements]
         * @type {?|undefined}
         */
        OrderStatusUpdateElementList.prototype.orderStatusUpdateElements;
    }
    /**
     *
     * An interface representing Order.
     * @record
     */
    function Order() { }
    Occ.Order = Order;
    if (false) {
        /**
         * \@member {PromotionResult[]} [appliedOrderPromotions]
         * @type {?|undefined}
         */
        Order.prototype.appliedOrderPromotions;
        /**
         * \@member {PromotionResult[]} [appliedProductPromotions]
         * @type {?|undefined}
         */
        Order.prototype.appliedProductPromotions;
        /**
         * \@member {Voucher[]} [appliedVouchers]
         * @type {?|undefined}
         */
        Order.prototype.appliedVouchers;
        /**
         * \@member {boolean} [calculated]
         * @type {?|undefined}
         */
        Order.prototype.calculated;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Order.prototype.code;
        /**
         * \@member {Consignment[]} [consignments]
         * @type {?|undefined}
         */
        Order.prototype.consignments;
        /**
         * \@member {Date} [created]
         * @type {?|undefined}
         */
        Order.prototype.created;
        /**
         * \@member {Address} [deliveryAddress]
         * @type {?|undefined}
         */
        Order.prototype.deliveryAddress;
        /**
         * \@member {Price} [deliveryCost]
         * @type {?|undefined}
         */
        Order.prototype.deliveryCost;
        /**
         * \@member {number} [deliveryItemsQuantity]
         * @type {?|undefined}
         */
        Order.prototype.deliveryItemsQuantity;
        /**
         * \@member {DeliveryMode} [deliveryMode]
         * @type {?|undefined}
         */
        Order.prototype.deliveryMode;
        /**
         * \@member {DeliveryOrderEntryGroup[]} [deliveryOrderGroups]
         * @type {?|undefined}
         */
        Order.prototype.deliveryOrderGroups;
        /**
         * \@member {string} [deliveryStatus]
         * @type {?|undefined}
         */
        Order.prototype.deliveryStatus;
        /**
         * \@member {string} [deliveryStatusDisplay]
         * @type {?|undefined}
         */
        Order.prototype.deliveryStatusDisplay;
        /**
         * \@member {OrderEntry[]} [entries]
         * @type {?|undefined}
         */
        Order.prototype.entries;
        /**
         * \@member {boolean} [guestCustomer]
         * @type {?|undefined}
         */
        Order.prototype.guestCustomer;
        /**
         * \@member {string} [guid]
         * @type {?|undefined}
         */
        Order.prototype.guid;
        /**
         * \@member {boolean} [net]
         * @type {?|undefined}
         */
        Order.prototype.net;
        /**
         * \@member {Price} [orderDiscounts]
         * @type {?|undefined}
         */
        Order.prototype.orderDiscounts;
        /**
         * \@member {PaymentDetails} [paymentInfo]
         * @type {?|undefined}
         */
        Order.prototype.paymentInfo;
        /**
         * \@member {number} [pickupItemsQuantity]
         * @type {?|undefined}
         */
        Order.prototype.pickupItemsQuantity;
        /**
         * \@member {PickupOrderEntryGroup[]} [pickupOrderGroups]
         * @type {?|undefined}
         */
        Order.prototype.pickupOrderGroups;
        /**
         * \@member {Price} [productDiscounts]
         * @type {?|undefined}
         */
        Order.prototype.productDiscounts;
        /**
         * \@member {string} [site]
         * @type {?|undefined}
         */
        Order.prototype.site;
        /**
         * \@member {string} [status]
         * @type {?|undefined}
         */
        Order.prototype.status;
        /**
         * \@member {string} [statusDisplay]
         * @type {?|undefined}
         */
        Order.prototype.statusDisplay;
        /**
         * \@member {string} [store]
         * @type {?|undefined}
         */
        Order.prototype.store;
        /**
         * \@member {Price} [subTotal]
         * @type {?|undefined}
         */
        Order.prototype.subTotal;
        /**
         * \@member {Price} [totalDiscounts]
         * @type {?|undefined}
         */
        Order.prototype.totalDiscounts;
        /**
         * \@member {number} [totalItems]
         * @type {?|undefined}
         */
        Order.prototype.totalItems;
        /**
         * \@member {Price} [totalPrice]
         * @type {?|undefined}
         */
        Order.prototype.totalPrice;
        /**
         * \@member {Price} [totalPriceWithTax]
         * @type {?|undefined}
         */
        Order.prototype.totalPriceWithTax;
        /**
         * \@member {Price} [totalTax]
         * @type {?|undefined}
         */
        Order.prototype.totalTax;
        /**
         * \@member {OrderEntry[]} [unconsignedEntries]
         * @type {?|undefined}
         */
        Order.prototype.unconsignedEntries;
        /**
         * \@member {Principal} [user]
         * @type {?|undefined}
         */
        Order.prototype.user;
    }
    /**
     *
     * An interface representing PaymentDetailsList.
     * @record
     */
    function PaymentDetailsList() { }
    Occ.PaymentDetailsList = PaymentDetailsList;
    if (false) {
        /**
         * \@member {PaymentDetails[]} [payments]
         * @type {?|undefined}
         */
        PaymentDetailsList.prototype.payments;
    }
    /**
     *
     * An interface representing PointOfServiceStock.
     * @record
     */
    function PointOfServiceStock() { }
    Occ.PointOfServiceStock = PointOfServiceStock;
    if (false) {
        /**
         * \@member {Address} [address]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.address;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.description;
        /**
         * \@member {string} [displayName]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.displayName;
        /**
         * \@member {number} [distanceKm]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.distanceKm;
        /**
         * \@member {{ [propertyName: string]: string }} [features]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.features;
        /**
         * \@member {string} [formattedDistance]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.formattedDistance;
        /**
         * \@member {GeoPoint} [geoPoint]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.geoPoint;
        /**
         * \@member {Image} [mapIcon]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.mapIcon;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.name;
        /**
         * \@member {OpeningSchedule} [openingHours]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.openingHours;
        /**
         * \@member {Stock} [stockInfo]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.stockInfo;
        /**
         * \@member {string} [storeContent]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.storeContent;
        /**
         * \@member {Image[]} [storeImages]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.storeImages;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.url;
    }
    /**
     *
     * An interface representing ProductExpressUpdateElement.
     * @record
     */
    function ProductExpressUpdateElement() { }
    Occ.ProductExpressUpdateElement = ProductExpressUpdateElement;
    if (false) {
        /**
         * \@member {string} [catalogId]
         * @type {?|undefined}
         */
        ProductExpressUpdateElement.prototype.catalogId;
        /**
         * \@member {string} [catalogVersion]
         * @type {?|undefined}
         */
        ProductExpressUpdateElement.prototype.catalogVersion;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        ProductExpressUpdateElement.prototype.code;
    }
    /**
     *
     * An interface representing ProductExpressUpdateElementList.
     * @record
     */
    function ProductExpressUpdateElementList() { }
    Occ.ProductExpressUpdateElementList = ProductExpressUpdateElementList;
    if (false) {
        /**
         * \@member {ProductExpressUpdateElement[]} [productExpressUpdateElements]
         * @type {?|undefined}
         */
        ProductExpressUpdateElementList.prototype.productExpressUpdateElements;
    }
    /**
     *
     * An interface representing ProductList.
     * @record
     */
    function ProductList() { }
    Occ.ProductList = ProductList;
    if (false) {
        /**
         * \@member {string} [catalog]
         * @type {?|undefined}
         */
        ProductList.prototype.catalog;
        /**
         * \@member {number} [currentPage]
         * @type {?|undefined}
         */
        ProductList.prototype.currentPage;
        /**
         * \@member {Product[]} [products]
         * @type {?|undefined}
         */
        ProductList.prototype.products;
        /**
         * \@member {number} [totalPageCount]
         * @type {?|undefined}
         */
        ProductList.prototype.totalPageCount;
        /**
         * \@member {number} [totalProductCount]
         * @type {?|undefined}
         */
        ProductList.prototype.totalProductCount;
        /**
         * \@member {string} [version]
         * @type {?|undefined}
         */
        ProductList.prototype.version;
    }
    /**
     *
     * An interface representing ProductReferenceList.
     * @record
     */
    function ProductReferenceList() { }
    Occ.ProductReferenceList = ProductReferenceList;
    if (false) {
        /**
         * \@member {ProductReference[]} [references]
         * @type {?|undefined}
         */
        ProductReferenceList.prototype.references;
    }
    /**
     *
     * An interface representing SpellingSuggestion.
     * @record
     */
    function SpellingSuggestion() { }
    Occ.SpellingSuggestion = SpellingSuggestion;
    if (false) {
        /**
         * \@member {string} [query]
         * @type {?|undefined}
         */
        SpellingSuggestion.prototype.query;
        /**
         * \@member {string} [suggestion]
         * @type {?|undefined}
         */
        SpellingSuggestion.prototype.suggestion;
    }
    /**
     *
     * An interface representing ProductSearchPage.
     * @record
     */
    function ProductSearchPage() { }
    Occ.ProductSearchPage = ProductSearchPage;
    if (false) {
        /**
         * \@member {Breadcrumb[]} [breadcrumbs]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.breadcrumbs;
        /**
         * \@member {string} [categoryCode]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.categoryCode;
        /**
         * \@member {SearchState} [currentQuery]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.currentQuery;
        /**
         * \@member {Facet[]} [facets]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.facets;
        /**
         * \@member {string} [freeTextSearch]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.freeTextSearch;
        /**
         * \@member {string} [keywordRedirectUrl]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.keywordRedirectUrl;
        /**
         * \@member {PaginationModel} [pagination]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.pagination;
        /**
         * \@member {Product[]} [products]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.products;
        /**
         * \@member {SortModel[]} [sorts]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.sorts;
        /**
         * \@member {SpellingSuggestion} [spellingSuggestion]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.spellingSuggestion;
    }
    /**
     *
     * An interface representing PromotionList.
     * @record
     */
    function PromotionList() { }
    Occ.PromotionList = PromotionList;
    if (false) {
        /**
         * \@member {Promotion[]} [promotions]
         * @type {?|undefined}
         */
        PromotionList.prototype.promotions;
    }
    /**
     *
     * An interface representing PromotionResultList.
     * @record
     */
    function PromotionResultList() { }
    Occ.PromotionResultList = PromotionResultList;
    if (false) {
        /**
         * \@member {PromotionResult[]} [promotions]
         * @type {?|undefined}
         */
        PromotionResultList.prototype.promotions;
    }
    /**
     *
     * An interface representing ReviewList.
     * @record
     */
    function ReviewList() { }
    Occ.ReviewList = ReviewList;
    if (false) {
        /**
         * \@member {Review[]} [reviews]
         * @type {?|undefined}
         */
        ReviewList.prototype.reviews;
    }
    /**
     *
     * An interface representing SaveCartResult.
     * @record
     */
    function SaveCartResult() { }
    Occ.SaveCartResult = SaveCartResult;
    if (false) {
        /**
         * \@member {Cart} [savedCartData]
         * @type {?|undefined}
         */
        SaveCartResult.prototype.savedCartData;
    }
    /**
     *
     * An interface representing StoreFinderSearchPage.
     * @record
     */
    function StoreFinderSearchPage() { }
    Occ.StoreFinderSearchPage = StoreFinderSearchPage;
    if (false) {
        /**
         * \@member {number} [boundEastLongitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.boundEastLongitude;
        /**
         * \@member {number} [boundNorthLatitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.boundNorthLatitude;
        /**
         * \@member {number} [boundSouthLatitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.boundSouthLatitude;
        /**
         * \@member {number} [boundWestLongitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.boundWestLongitude;
        /**
         * \@member {string} [locationText]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.locationText;
        /**
         * \@member {PaginationModel} [pagination]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.pagination;
        /**
         * \@member {SortModel[]} [sorts]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.sorts;
        /**
         * \@member {number} [sourceLatitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.sourceLatitude;
        /**
         * \@member {number} [sourceLongitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.sourceLongitude;
        /**
         * \@member {PointOfService[]} [stores]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.stores;
    }
    /**
     *
     * An interface representing StoreFinderStockSearchPage.
     * @record
     */
    function StoreFinderStockSearchPage() { }
    Occ.StoreFinderStockSearchPage = StoreFinderStockSearchPage;
    if (false) {
        /**
         * \@member {number} [boundEastLongitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.boundEastLongitude;
        /**
         * \@member {number} [boundNorthLatitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.boundNorthLatitude;
        /**
         * \@member {number} [boundSouthLatitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.boundSouthLatitude;
        /**
         * \@member {number} [boundWestLongitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.boundWestLongitude;
        /**
         * \@member {string} [locationText]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.locationText;
        /**
         * \@member {PaginationModel} [pagination]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.pagination;
        /**
         * \@member {Product} [product]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.product;
        /**
         * \@member {SortModel[]} [sorts]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.sorts;
        /**
         * \@member {number} [sourceLatitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.sourceLatitude;
        /**
         * \@member {number} [sourceLongitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.sourceLongitude;
        /**
         * \@member {PointOfServiceStock[]} [stores]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.stores;
    }
    /**
     *
     * An interface representing Suggestion.
     * @record
     */
    function Suggestion() { }
    Occ.Suggestion = Suggestion;
    if (false) {
        /**
         * \@member {string} [value]
         * @type {?|undefined}
         */
        Suggestion.prototype.value;
    }
    /**
     *
     * An interface representing SuggestionList.
     * @record
     */
    function SuggestionList() { }
    Occ.SuggestionList = SuggestionList;
    if (false) {
        /**
         * \@member {Suggestion[]} [suggestions]
         * @type {?|undefined}
         */
        SuggestionList.prototype.suggestions;
    }
    /**
     *
     * An interface representing Title.
     * @record
     */
    function Title() { }
    Occ.Title = Title;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Title.prototype.code;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Title.prototype.name;
    }
    /**
     *
     * An interface representing TitleList.
     * @record
     */
    function TitleList() { }
    Occ.TitleList = TitleList;
    if (false) {
        /**
         * \@member {Title[]} [titles]
         * @type {?|undefined}
         */
        TitleList.prototype.titles;
    }
    /**
     *
     * An interface representing UserGroup.
     * @record
     */
    function UserGroup() { }
    Occ.UserGroup = UserGroup;
    if (false) {
        /**
         * \@member {Principal[]} [members]
         * @type {?|undefined}
         */
        UserGroup.prototype.members;
        /**
         * \@member {number} [membersCount]
         * @type {?|undefined}
         */
        UserGroup.prototype.membersCount;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        UserGroup.prototype.name;
        /**
         * \@member {UserGroup[]} [subGroups]
         * @type {?|undefined}
         */
        UserGroup.prototype.subGroups;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        UserGroup.prototype.uid;
    }
    /**
     *
     * An interface representing UserGroupList.
     * @record
     */
    function UserGroupList() { }
    Occ.UserGroupList = UserGroupList;
    if (false) {
        /**
         * \@member {number} [currentPage]
         * @type {?|undefined}
         */
        UserGroupList.prototype.currentPage;
        /**
         * \@member {number} [numberOfPages]
         * @type {?|undefined}
         */
        UserGroupList.prototype.numberOfPages;
        /**
         * \@member {number} [pageSize]
         * @type {?|undefined}
         */
        UserGroupList.prototype.pageSize;
        /**
         * \@member {number} [totalNumber]
         * @type {?|undefined}
         */
        UserGroupList.prototype.totalNumber;
        /**
         * \@member {UserGroup[]} [userGroups]
         * @type {?|undefined}
         */
        UserGroupList.prototype.userGroups;
    }
    /**
     *
     * An interface representing UserSignUp.
     * @record
     */
    function UserSignUp() { }
    Occ.UserSignUp = UserSignUp;
    if (false) {
        /**
         * \@member {string} [firstName]
         * @type {?|undefined}
         */
        UserSignUp.prototype.firstName;
        /**
         * \@member {string} [lastName]
         * @type {?|undefined}
         */
        UserSignUp.prototype.lastName;
        /**
         * \@member {string} [password]
         * @type {?|undefined}
         */
        UserSignUp.prototype.password;
        /**
         * \@member {string} [titleCode]
         * @type {?|undefined}
         */
        UserSignUp.prototype.titleCode;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        UserSignUp.prototype.uid;
    }
    /**
     * @record
     */
    function StoreCount() { }
    Occ.StoreCount = StoreCount;
    if (false) {
        /** @type {?|undefined} */
        StoreCount.prototype.count;
        /** @type {?|undefined} */
        StoreCount.prototype.isoCode;
        /** @type {?|undefined} */
        StoreCount.prototype.name;
        /** @type {?|undefined} */
        StoreCount.prototype.type;
    }
    /**
     * @record
     */
    function StoreCountList() { }
    Occ.StoreCountList = StoreCountList;
    if (false) {
        /** @type {?|undefined} */
        StoreCountList.prototype.countriesAndRegionsStoreCount;
    }
    /**
     *
     * An interface representing VoucherList.
     * @record
     */
    function VoucherList() { }
    Occ.VoucherList = VoucherList;
    if (false) {
        /**
         * \@member {Voucher[]} [vouchers]
         * @type {?|undefined}
         */
        VoucherList.prototype.vouchers;
    }
    /**
     * Defines values for PriceType.
     * Possible values include: 'BUY', 'FROM'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: PriceType = <PriceType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var PriceType;
    (function (PriceType) {
        PriceType["BUY"] = "BUY";
        PriceType["FROM"] = "FROM";
    })(PriceType = Occ.PriceType || (Occ.PriceType = {}));
    /**
     * Defines values for ImageType.
     * Possible values include: 'PRIMARY', 'GALLERY'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: ImageType = <ImageType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var ImageType;
    (function (ImageType) {
        ImageType["PRIMARY"] = "PRIMARY";
        ImageType["GALLERY"] = "GALLERY";
    })(ImageType = Occ.ImageType || (Occ.ImageType = {}));
    /**
     * Defines values for Fields.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields = <Fields>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields;
    (function (Fields) {
        Fields["BASIC"] = "BASIC";
        Fields["DEFAULT"] = "DEFAULT";
        Fields["FULL"] = "FULL";
    })(Fields = Occ.Fields || (Occ.Fields = {}));
    /**
     * Defines values for Fields1.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields1 = <Fields1>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields1;
    (function (Fields1) {
        Fields1["BASIC"] = "BASIC";
        Fields1["DEFAULT"] = "DEFAULT";
        Fields1["FULL"] = "FULL";
    })(Fields1 = Occ.Fields1 || (Occ.Fields1 = {}));
    /**
     * Defines values for Fields2.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields2 = <Fields2>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields2;
    (function (Fields2) {
        Fields2["BASIC"] = "BASIC";
        Fields2["DEFAULT"] = "DEFAULT";
        Fields2["FULL"] = "FULL";
    })(Fields2 = Occ.Fields2 || (Occ.Fields2 = {}));
    /**
     * Defines values for Fields3.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields3 = <Fields3>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields3;
    (function (Fields3) {
        Fields3["BASIC"] = "BASIC";
        Fields3["DEFAULT"] = "DEFAULT";
        Fields3["FULL"] = "FULL";
    })(Fields3 = Occ.Fields3 || (Occ.Fields3 = {}));
    /**
     * Defines values for Fields4.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields4 = <Fields4>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields4;
    (function (Fields4) {
        Fields4["BASIC"] = "BASIC";
        Fields4["DEFAULT"] = "DEFAULT";
        Fields4["FULL"] = "FULL";
    })(Fields4 = Occ.Fields4 || (Occ.Fields4 = {}));
    /**
     * Defines values for Fields5.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields5 = <Fields5>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields5;
    (function (Fields5) {
        Fields5["BASIC"] = "BASIC";
        Fields5["DEFAULT"] = "DEFAULT";
        Fields5["FULL"] = "FULL";
    })(Fields5 = Occ.Fields5 || (Occ.Fields5 = {}));
    /**
     * Defines values for Fields6.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields6 = <Fields6>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields6;
    (function (Fields6) {
        Fields6["BASIC"] = "BASIC";
        Fields6["DEFAULT"] = "DEFAULT";
        Fields6["FULL"] = "FULL";
    })(Fields6 = Occ.Fields6 || (Occ.Fields6 = {}));
    /**
     * Defines values for PageType.
     * Possible values include: 'ContentPage', 'ProductPage', 'CategoryPage',
     * 'CatalogPage'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: PageType = <PageType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var PageType;
    (function (PageType) {
        PageType["CONTENT_PAGE"] = "ContentPage";
        PageType["PRODUCT_PAGE"] = "ProductPage";
        PageType["CATEGORY_PAGE"] = "CategoryPage";
        PageType["CATALOG_PAGE"] = "CatalogPage";
    })(PageType = Occ.PageType || (Occ.PageType = {}));
    /**
     * Defines values for Fields7.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields7 = <Fields7>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields7;
    (function (Fields7) {
        Fields7["BASIC"] = "BASIC";
        Fields7["DEFAULT"] = "DEFAULT";
        Fields7["FULL"] = "FULL";
    })(Fields7 = Occ.Fields7 || (Occ.Fields7 = {}));
    /**
     * Defines values for Fields8.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields8 = <Fields8>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields8;
    (function (Fields8) {
        Fields8["BASIC"] = "BASIC";
        Fields8["DEFAULT"] = "DEFAULT";
        Fields8["FULL"] = "FULL";
    })(Fields8 = Occ.Fields8 || (Occ.Fields8 = {}));
    /**
     * Defines values for Fields9.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields9 = <Fields9>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields9;
    (function (Fields9) {
        Fields9["BASIC"] = "BASIC";
        Fields9["DEFAULT"] = "DEFAULT";
        Fields9["FULL"] = "FULL";
    })(Fields9 = Occ.Fields9 || (Occ.Fields9 = {}));
    /**
     * Defines values for Fields10.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields10 = <Fields10>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields10;
    (function (Fields10) {
        Fields10["BASIC"] = "BASIC";
        Fields10["DEFAULT"] = "DEFAULT";
        Fields10["FULL"] = "FULL";
    })(Fields10 = Occ.Fields10 || (Occ.Fields10 = {}));
    /**
     * Defines values for Fields11.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields11 = <Fields11>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields11;
    (function (Fields11) {
        Fields11["BASIC"] = "BASIC";
        Fields11["DEFAULT"] = "DEFAULT";
        Fields11["FULL"] = "FULL";
    })(Fields11 = Occ.Fields11 || (Occ.Fields11 = {}));
    /**
     * Defines values for Fields12.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields12 = <Fields12>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields12;
    (function (Fields12) {
        Fields12["BASIC"] = "BASIC";
        Fields12["DEFAULT"] = "DEFAULT";
        Fields12["FULL"] = "FULL";
    })(Fields12 = Occ.Fields12 || (Occ.Fields12 = {}));
    /**
     * Defines values for Fields13.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields13 = <Fields13>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields13;
    (function (Fields13) {
        Fields13["BASIC"] = "BASIC";
        Fields13["DEFAULT"] = "DEFAULT";
        Fields13["FULL"] = "FULL";
    })(Fields13 = Occ.Fields13 || (Occ.Fields13 = {}));
    /**
     * Defines values for Fields14.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields14 = <Fields14>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields14;
    (function (Fields14) {
        Fields14["BASIC"] = "BASIC";
        Fields14["DEFAULT"] = "DEFAULT";
        Fields14["FULL"] = "FULL";
    })(Fields14 = Occ.Fields14 || (Occ.Fields14 = {}));
    /**
     * Defines values for Fields15.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields15 = <Fields15>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields15;
    (function (Fields15) {
        Fields15["BASIC"] = "BASIC";
        Fields15["DEFAULT"] = "DEFAULT";
        Fields15["FULL"] = "FULL";
    })(Fields15 = Occ.Fields15 || (Occ.Fields15 = {}));
    /**
     * Defines values for Fields16.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields16 = <Fields16>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields16;
    (function (Fields16) {
        Fields16["BASIC"] = "BASIC";
        Fields16["DEFAULT"] = "DEFAULT";
        Fields16["FULL"] = "FULL";
    })(Fields16 = Occ.Fields16 || (Occ.Fields16 = {}));
    /**
     * Defines values for SortEnum.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: SortEnum = <SortEnum>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var SortEnum;
    (function (SortEnum) {
        SortEnum["BASIC"] = "BASIC";
        SortEnum["DEFAULT"] = "DEFAULT";
        SortEnum["FULL"] = "FULL";
    })(SortEnum = Occ.SortEnum || (Occ.SortEnum = {}));
    /**
     * Defines values for Fields17.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields17 = <Fields17>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields17;
    (function (Fields17) {
        Fields17["BASIC"] = "BASIC";
        Fields17["DEFAULT"] = "DEFAULT";
        Fields17["FULL"] = "FULL";
    })(Fields17 = Occ.Fields17 || (Occ.Fields17 = {}));
    /**
     * Defines values for Fields18.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields18 = <Fields18>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields18;
    (function (Fields18) {
        Fields18["BASIC"] = "BASIC";
        Fields18["DEFAULT"] = "DEFAULT";
        Fields18["FULL"] = "FULL";
    })(Fields18 = Occ.Fields18 || (Occ.Fields18 = {}));
    /**
     * Defines values for Fields19.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields19 = <Fields19>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields19;
    (function (Fields19) {
        Fields19["BASIC"] = "BASIC";
        Fields19["DEFAULT"] = "DEFAULT";
        Fields19["FULL"] = "FULL";
    })(Fields19 = Occ.Fields19 || (Occ.Fields19 = {}));
    /**
     * Defines values for Fields20.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields20 = <Fields20>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields20;
    (function (Fields20) {
        Fields20["BASIC"] = "BASIC";
        Fields20["DEFAULT"] = "DEFAULT";
        Fields20["FULL"] = "FULL";
    })(Fields20 = Occ.Fields20 || (Occ.Fields20 = {}));
    /**
     * Defines values for Fields21.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields21 = <Fields21>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields21;
    (function (Fields21) {
        Fields21["BASIC"] = "BASIC";
        Fields21["DEFAULT"] = "DEFAULT";
        Fields21["FULL"] = "FULL";
    })(Fields21 = Occ.Fields21 || (Occ.Fields21 = {}));
    /**
     * Defines values for Fields22.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields22 = <Fields22>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields22;
    (function (Fields22) {
        Fields22["BASIC"] = "BASIC";
        Fields22["DEFAULT"] = "DEFAULT";
        Fields22["FULL"] = "FULL";
    })(Fields22 = Occ.Fields22 || (Occ.Fields22 = {}));
    /**
     * Defines values for Fields23.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields23 = <Fields23>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields23;
    (function (Fields23) {
        Fields23["BASIC"] = "BASIC";
        Fields23["DEFAULT"] = "DEFAULT";
        Fields23["FULL"] = "FULL";
    })(Fields23 = Occ.Fields23 || (Occ.Fields23 = {}));
    /**
     * Defines values for Fields24.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields24 = <Fields24>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields24;
    (function (Fields24) {
        Fields24["BASIC"] = "BASIC";
        Fields24["DEFAULT"] = "DEFAULT";
        Fields24["FULL"] = "FULL";
    })(Fields24 = Occ.Fields24 || (Occ.Fields24 = {}));
    /**
     * Defines values for Fields25.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields25 = <Fields25>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields25;
    (function (Fields25) {
        Fields25["BASIC"] = "BASIC";
        Fields25["DEFAULT"] = "DEFAULT";
        Fields25["FULL"] = "FULL";
    })(Fields25 = Occ.Fields25 || (Occ.Fields25 = {}));
    /**
     * Defines values for Fields26.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields26 = <Fields26>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields26;
    (function (Fields26) {
        Fields26["BASIC"] = "BASIC";
        Fields26["DEFAULT"] = "DEFAULT";
        Fields26["FULL"] = "FULL";
    })(Fields26 = Occ.Fields26 || (Occ.Fields26 = {}));
    /**
     * Defines values for Fields27.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields27 = <Fields27>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields27;
    (function (Fields27) {
        Fields27["BASIC"] = "BASIC";
        Fields27["DEFAULT"] = "DEFAULT";
        Fields27["FULL"] = "FULL";
    })(Fields27 = Occ.Fields27 || (Occ.Fields27 = {}));
    /**
     * Defines values for Fields28.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields28 = <Fields28>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields28;
    (function (Fields28) {
        Fields28["BASIC"] = "BASIC";
        Fields28["DEFAULT"] = "DEFAULT";
        Fields28["FULL"] = "FULL";
    })(Fields28 = Occ.Fields28 || (Occ.Fields28 = {}));
    /**
     * Defines values for Fields29.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields29 = <Fields29>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields29;
    (function (Fields29) {
        Fields29["BASIC"] = "BASIC";
        Fields29["DEFAULT"] = "DEFAULT";
        Fields29["FULL"] = "FULL";
    })(Fields29 = Occ.Fields29 || (Occ.Fields29 = {}));
    /**
     * Defines values for Fields30.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields30 = <Fields30>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields30;
    (function (Fields30) {
        Fields30["BASIC"] = "BASIC";
        Fields30["DEFAULT"] = "DEFAULT";
        Fields30["FULL"] = "FULL";
    })(Fields30 = Occ.Fields30 || (Occ.Fields30 = {}));
    /**
     * Defines values for Fields31.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields31 = <Fields31>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields31;
    (function (Fields31) {
        Fields31["BASIC"] = "BASIC";
        Fields31["DEFAULT"] = "DEFAULT";
        Fields31["FULL"] = "FULL";
    })(Fields31 = Occ.Fields31 || (Occ.Fields31 = {}));
    /**
     * Defines values for Fields32.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields32 = <Fields32>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields32;
    (function (Fields32) {
        Fields32["BASIC"] = "BASIC";
        Fields32["DEFAULT"] = "DEFAULT";
        Fields32["FULL"] = "FULL";
    })(Fields32 = Occ.Fields32 || (Occ.Fields32 = {}));
    /**
     * Defines values for Fields33.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields33 = <Fields33>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields33;
    (function (Fields33) {
        Fields33["BASIC"] = "BASIC";
        Fields33["DEFAULT"] = "DEFAULT";
        Fields33["FULL"] = "FULL";
    })(Fields33 = Occ.Fields33 || (Occ.Fields33 = {}));
    /**
     * Defines values for Fields34.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields34 = <Fields34>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields34;
    (function (Fields34) {
        Fields34["BASIC"] = "BASIC";
        Fields34["DEFAULT"] = "DEFAULT";
        Fields34["FULL"] = "FULL";
    })(Fields34 = Occ.Fields34 || (Occ.Fields34 = {}));
    /**
     * Defines values for Fields35.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields35 = <Fields35>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields35;
    (function (Fields35) {
        Fields35["BASIC"] = "BASIC";
        Fields35["DEFAULT"] = "DEFAULT";
        Fields35["FULL"] = "FULL";
    })(Fields35 = Occ.Fields35 || (Occ.Fields35 = {}));
    /**
     * Defines values for Fields36.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields36 = <Fields36>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields36;
    (function (Fields36) {
        Fields36["BASIC"] = "BASIC";
        Fields36["DEFAULT"] = "DEFAULT";
        Fields36["FULL"] = "FULL";
    })(Fields36 = Occ.Fields36 || (Occ.Fields36 = {}));
    /**
     * Defines values for Fields37.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields37 = <Fields37>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields37;
    (function (Fields37) {
        Fields37["BASIC"] = "BASIC";
        Fields37["DEFAULT"] = "DEFAULT";
        Fields37["FULL"] = "FULL";
    })(Fields37 = Occ.Fields37 || (Occ.Fields37 = {}));
    /**
     * Defines values for Fields38.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields38 = <Fields38>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields38;
    (function (Fields38) {
        Fields38["BASIC"] = "BASIC";
        Fields38["DEFAULT"] = "DEFAULT";
        Fields38["FULL"] = "FULL";
    })(Fields38 = Occ.Fields38 || (Occ.Fields38 = {}));
    /**
     * Defines values for Fields39.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields39 = <Fields39>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields39;
    (function (Fields39) {
        Fields39["BASIC"] = "BASIC";
        Fields39["DEFAULT"] = "DEFAULT";
        Fields39["FULL"] = "FULL";
    })(Fields39 = Occ.Fields39 || (Occ.Fields39 = {}));
    /**
     * Defines values for Fields40.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields40 = <Fields40>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields40;
    (function (Fields40) {
        Fields40["BASIC"] = "BASIC";
        Fields40["DEFAULT"] = "DEFAULT";
        Fields40["FULL"] = "FULL";
    })(Fields40 = Occ.Fields40 || (Occ.Fields40 = {}));
    /**
     * Defines values for Fields41.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields41 = <Fields41>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields41;
    (function (Fields41) {
        Fields41["BASIC"] = "BASIC";
        Fields41["DEFAULT"] = "DEFAULT";
        Fields41["FULL"] = "FULL";
    })(Fields41 = Occ.Fields41 || (Occ.Fields41 = {}));
    /**
     * Defines values for Fields42.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields42 = <Fields42>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields42;
    (function (Fields42) {
        Fields42["BASIC"] = "BASIC";
        Fields42["DEFAULT"] = "DEFAULT";
        Fields42["FULL"] = "FULL";
    })(Fields42 = Occ.Fields42 || (Occ.Fields42 = {}));
    /**
     * Defines values for Fields43.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields43 = <Fields43>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields43;
    (function (Fields43) {
        Fields43["BASIC"] = "BASIC";
        Fields43["DEFAULT"] = "DEFAULT";
        Fields43["FULL"] = "FULL";
    })(Fields43 = Occ.Fields43 || (Occ.Fields43 = {}));
    /**
     * Defines values for Fields44.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields44 = <Fields44>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields44;
    (function (Fields44) {
        Fields44["BASIC"] = "BASIC";
        Fields44["DEFAULT"] = "DEFAULT";
        Fields44["FULL"] = "FULL";
    })(Fields44 = Occ.Fields44 || (Occ.Fields44 = {}));
    /**
     * Defines values for Fields45.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields45 = <Fields45>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields45;
    (function (Fields45) {
        Fields45["BASIC"] = "BASIC";
        Fields45["DEFAULT"] = "DEFAULT";
        Fields45["FULL"] = "FULL";
    })(Fields45 = Occ.Fields45 || (Occ.Fields45 = {}));
    /**
     * Defines values for Fields46.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields46 = <Fields46>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields46;
    (function (Fields46) {
        Fields46["BASIC"] = "BASIC";
        Fields46["DEFAULT"] = "DEFAULT";
        Fields46["FULL"] = "FULL";
    })(Fields46 = Occ.Fields46 || (Occ.Fields46 = {}));
    /**
     * Defines values for Fields47.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields47 = <Fields47>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields47;
    (function (Fields47) {
        Fields47["BASIC"] = "BASIC";
        Fields47["DEFAULT"] = "DEFAULT";
        Fields47["FULL"] = "FULL";
    })(Fields47 = Occ.Fields47 || (Occ.Fields47 = {}));
    /**
     * Defines values for Fields48.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields48 = <Fields48>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields48;
    (function (Fields48) {
        Fields48["BASIC"] = "BASIC";
        Fields48["DEFAULT"] = "DEFAULT";
        Fields48["FULL"] = "FULL";
    })(Fields48 = Occ.Fields48 || (Occ.Fields48 = {}));
    /**
     * Defines values for Fields49.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields49 = <Fields49>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields49;
    (function (Fields49) {
        Fields49["BASIC"] = "BASIC";
        Fields49["DEFAULT"] = "DEFAULT";
        Fields49["FULL"] = "FULL";
    })(Fields49 = Occ.Fields49 || (Occ.Fields49 = {}));
    /**
     * Defines values for Fields50.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields50 = <Fields50>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields50;
    (function (Fields50) {
        Fields50["BASIC"] = "BASIC";
        Fields50["DEFAULT"] = "DEFAULT";
        Fields50["FULL"] = "FULL";
    })(Fields50 = Occ.Fields50 || (Occ.Fields50 = {}));
    /**
     * Defines values for Fields51.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields51 = <Fields51>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields51;
    (function (Fields51) {
        Fields51["BASIC"] = "BASIC";
        Fields51["DEFAULT"] = "DEFAULT";
        Fields51["FULL"] = "FULL";
    })(Fields51 = Occ.Fields51 || (Occ.Fields51 = {}));
    /**
     * Defines values for Fields52.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields52 = <Fields52>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields52;
    (function (Fields52) {
        Fields52["BASIC"] = "BASIC";
        Fields52["DEFAULT"] = "DEFAULT";
        Fields52["FULL"] = "FULL";
    })(Fields52 = Occ.Fields52 || (Occ.Fields52 = {}));
    /**
     * Defines values for Fields53.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields53 = <Fields53>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields53;
    (function (Fields53) {
        Fields53["BASIC"] = "BASIC";
        Fields53["DEFAULT"] = "DEFAULT";
        Fields53["FULL"] = "FULL";
    })(Fields53 = Occ.Fields53 || (Occ.Fields53 = {}));
    /**
     * Defines values for Fields54.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields54 = <Fields54>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields54;
    (function (Fields54) {
        Fields54["BASIC"] = "BASIC";
        Fields54["DEFAULT"] = "DEFAULT";
        Fields54["FULL"] = "FULL";
    })(Fields54 = Occ.Fields54 || (Occ.Fields54 = {}));
    /**
     * Defines values for Fields55.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields55 = <Fields55>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields55;
    (function (Fields55) {
        Fields55["BASIC"] = "BASIC";
        Fields55["DEFAULT"] = "DEFAULT";
        Fields55["FULL"] = "FULL";
    })(Fields55 = Occ.Fields55 || (Occ.Fields55 = {}));
    /**
     * Defines values for Fields56.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields56 = <Fields56>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields56;
    (function (Fields56) {
        Fields56["BASIC"] = "BASIC";
        Fields56["DEFAULT"] = "DEFAULT";
        Fields56["FULL"] = "FULL";
    })(Fields56 = Occ.Fields56 || (Occ.Fields56 = {}));
    /**
     * Defines values for Fields57.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields57 = <Fields57>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields57;
    (function (Fields57) {
        Fields57["BASIC"] = "BASIC";
        Fields57["DEFAULT"] = "DEFAULT";
        Fields57["FULL"] = "FULL";
    })(Fields57 = Occ.Fields57 || (Occ.Fields57 = {}));
    /**
     * Defines values for Fields58.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields58 = <Fields58>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields58;
    (function (Fields58) {
        Fields58["BASIC"] = "BASIC";
        Fields58["DEFAULT"] = "DEFAULT";
        Fields58["FULL"] = "FULL";
    })(Fields58 = Occ.Fields58 || (Occ.Fields58 = {}));
    /**
     * Defines values for Fields59.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields59 = <Fields59>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields59;
    (function (Fields59) {
        Fields59["BASIC"] = "BASIC";
        Fields59["DEFAULT"] = "DEFAULT";
        Fields59["FULL"] = "FULL";
    })(Fields59 = Occ.Fields59 || (Occ.Fields59 = {}));
    /**
     * Defines values for Fields60.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields60 = <Fields60>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields60;
    (function (Fields60) {
        Fields60["BASIC"] = "BASIC";
        Fields60["DEFAULT"] = "DEFAULT";
        Fields60["FULL"] = "FULL";
    })(Fields60 = Occ.Fields60 || (Occ.Fields60 = {}));
    /**
     * Defines values for Fields61.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields61 = <Fields61>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Fields61;
    (function (Fields61) {
        Fields61["BASIC"] = "BASIC";
        Fields61["DEFAULT"] = "DEFAULT";
        Fields61["FULL"] = "FULL";
    })(Fields61 = Occ.Fields61 || (Occ.Fields61 = {}));
    /**
     * Defines values for Type.
     * Possible values include: 'all', 'product', 'order'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Type = <Type>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    var Type;
    (function (Type) {
        Type["All"] = "all";
        Type["Product"] = "product";
        Type["Order"] = "order";
    })(Type = Occ.Type || (Occ.Type = {}));
    /**
     * @record
     */
    function AnonymousConsent() { }
    Occ.AnonymousConsent = AnonymousConsent;
    if (false) {
        /** @type {?|undefined} */
        AnonymousConsent.prototype.templateCode;
        /** @type {?|undefined} */
        AnonymousConsent.prototype.version;
        /** @type {?|undefined} */
        AnonymousConsent.prototype.consentState;
    }
    var CONSENT_STATUS;
    (function (CONSENT_STATUS) {
        CONSENT_STATUS["ANONYMOUS_CONSENT_GIVEN"] = "GIVEN";
        CONSENT_STATUS["ANONYMOUS_CONSENT_WITHDRAWN"] = "WITHDRAWN";
    })(CONSENT_STATUS = Occ.CONSENT_STATUS || (Occ.CONSENT_STATUS = {}));
    /**
     * @record
     */
    function ConsentTemplate() { }
    Occ.ConsentTemplate = ConsentTemplate;
    if (false) {
        /** @type {?|undefined} */
        ConsentTemplate.prototype.id;
        /** @type {?|undefined} */
        ConsentTemplate.prototype.name;
        /** @type {?|undefined} */
        ConsentTemplate.prototype.description;
        /** @type {?|undefined} */
        ConsentTemplate.prototype.version;
        /** @type {?|undefined} */
        ConsentTemplate.prototype.currentConsent;
    }
    /**
     * @record
     */
    function Consent() { }
    Occ.Consent = Consent;
    if (false) {
        /** @type {?|undefined} */
        Consent.prototype.code;
        /** @type {?|undefined} */
        Consent.prototype.consentGivenDate;
        /** @type {?|undefined} */
        Consent.prototype.consentWithdrawnDate;
    }
    /**
     * @record
     */
    function ConsentTemplateList() { }
    Occ.ConsentTemplateList = ConsentTemplateList;
    if (false) {
        /** @type {?|undefined} */
        ConsentTemplateList.prototype.consentTemplates;
    }
    /**
     * @record
     */
    function BaseSites() { }
    Occ.BaseSites = BaseSites;
    if (false) {
        /** @type {?|undefined} */
        BaseSites.prototype.baseSites;
    }
    /**
     * @record
     */
    function BaseSite() { }
    Occ.BaseSite = BaseSite;
    if (false) {
        /** @type {?|undefined} */
        BaseSite.prototype.channel;
        /** @type {?|undefined} */
        BaseSite.prototype.defaultLanguage;
        /** @type {?|undefined} */
        BaseSite.prototype.defaultPreviewCatalogId;
        /** @type {?|undefined} */
        BaseSite.prototype.defaultPreviewCategoryCode;
        /** @type {?|undefined} */
        BaseSite.prototype.defaultPreviewProductCode;
        /** @type {?|undefined} */
        BaseSite.prototype.locale;
        /** @type {?|undefined} */
        BaseSite.prototype.name;
        /** @type {?|undefined} */
        BaseSite.prototype.theme;
        /** @type {?|undefined} */
        BaseSite.prototype.uid;
        /** @type {?|undefined} */
        BaseSite.prototype.stores;
        /** @type {?|undefined} */
        BaseSite.prototype.urlPatterns;
        /** @type {?|undefined} */
        BaseSite.prototype.urlEncodingAttributes;
    }
    /**
     * @record
     */
    function BaseStore() { }
    Occ.BaseStore = BaseStore;
    if (false) {
        /** @type {?|undefined} */
        BaseStore.prototype.currencies;
        /** @type {?|undefined} */
        BaseStore.prototype.defaultCurrency;
        /** @type {?|undefined} */
        BaseStore.prototype.languages;
        /** @type {?|undefined} */
        BaseStore.prototype.defaultLanguage;
    }
})(Occ || (Occ = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEtBQVcsR0FBRyxDQTA1SG5CO0FBMTVIRCxXQUFpQixHQUFHOzs7Ozs7SUFLbEIsc0JBU0M7Ozs7Ozs7UUFMQywwQkFBaUI7Ozs7O1FBSWpCLHVCQUFjOzs7Ozs7O0lBT2hCLHFCQWlCQzs7Ozs7OztRQWJDLDRCQUFvQjs7Ozs7UUFJcEIseUJBQWlCOzs7OztRQUlqQiw4QkFBc0I7Ozs7O1FBSXRCLHNCQUFjOzs7Ozs7O0lBT2hCLHlCQUtDOzs7Ozs7O1FBREMsNkJBQW1COzs7Ozs7O0lBT3JCLHNCQXlFQzs7Ozs7OztRQXJFQyw4QkFBcUI7Ozs7O1FBSXJCLDBCQUFrQjs7Ozs7UUFJbEIsaUNBQXlCOzs7OztRQUl6Qix3QkFBZTs7Ozs7UUFJZiw0QkFBbUI7Ozs7O1FBSW5CLG1DQUEwQjs7Ozs7UUFJMUIscUJBQVk7Ozs7O1FBSVosMkJBQWtCOzs7OztRQUlsQix3QkFBZTs7Ozs7UUFJZix3QkFBZTs7Ozs7UUFJZix3QkFBZTs7Ozs7UUFJZiw2QkFBb0I7Ozs7O1FBSXBCLHlCQUFnQjs7Ozs7UUFJaEIsa0NBQTBCOzs7OztRQUkxQix3QkFBZTs7Ozs7UUFJZiw0QkFBbUI7Ozs7O1FBSW5CLHVCQUFjOzs7OztRQUlkLHVDQUErQjs7Ozs7OztJQU9qQywwQkFLQzs7Ozs7OztRQURDLGdDQUFzQjs7Ozs7Ozs7O0lBU3hCLHlCQXVCQzs7Ozs7OztRQW5CQyw2QkFBaUI7Ozs7OztRQUtqQiw0QkFBZ0I7Ozs7O1FBSWhCLDZCQUFpQjs7Ozs7O1FBS2pCLGlDQUFxQjs7Ozs7UUFJckIsMEJBQWM7Ozs7Ozs7OztJQVNoQix3QkFLQzs7Ozs7OztRQURDLDJCQUFzQjs7Ozs7OztJQU94QixnQ0FhQzs7Ozs7OztRQVRDLHFDQUFrQjs7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O0lBSkQsV0FBWSxJQUFJO1FBQ2QsbUJBQVcsQ0FBQTtRQUNYLDJCQUFtQixDQUFBO1FBQ25CLHVCQUFlLENBQUE7SUFDakIsQ0FBQyxFQUpXLElBQUksR0FBSixRQUFJLEtBQUosUUFBSSxRQUlmOzs7O0lBRUQsK0JBSUM7Ozs7UUFIQyx3Q0FBc0I7O1FBQ3RCLG1DQUFpQjs7UUFDakIsd0NBQThCOztJQUdoQyxJQUFZLGNBR1g7SUFIRCxXQUFZLGNBQWM7UUFDeEIsbURBQWlDLENBQUE7UUFDakMsMkRBQXlDLENBQUE7SUFDM0MsQ0FBQyxFQUhXLGNBQWMsR0FBZCxrQkFBYyxLQUFkLGtCQUFjLFFBR3pCOzs7O0lBRUQsOEJBTUM7Ozs7UUFMQyw2QkFBWTs7UUFDWiwrQkFBYzs7UUFDZCxzQ0FBcUI7O1FBQ3JCLGtDQUFpQjs7UUFDakIseUNBQXlCOzs7OztJQUczQixzQkFJQzs7OztRQUhDLHVCQUFjOztRQUNkLG1DQUF3Qjs7UUFDeEIsdUNBQTRCOzs7OztJQUc5QixrQ0FFQzs7OztRQURDLCtDQUFxQzs7Ozs7SUFHdkMsd0JBRUM7Ozs7UUFEQyw4QkFBdUI7Ozs7O0lBR3pCLHVCQWFDOzs7O1FBWkMsMkJBQWlCOztRQUNqQixtQ0FBMkI7O1FBQzNCLDJDQUFpQzs7UUFDakMsOENBQW9DOztRQUNwQyw2Q0FBbUM7O1FBQ25DLDBCQUFnQjs7UUFDaEIsd0JBQWM7O1FBQ2QseUJBQWU7O1FBQ2YsdUJBQWE7O1FBQ2IsMEJBQXFCOztRQUNyQiwrQkFBdUI7O1FBQ3ZCLHlDQUFpQzs7Ozs7SUFHbkMsd0JBS0M7Ozs7UUFKQywrQkFBd0I7O1FBQ3hCLG9DQUEyQjs7UUFDM0IsOEJBQXVCOztRQUN2QixvQ0FBMkI7O0FBRS9CLENBQUMsRUExNUhnQixHQUFHLEtBQUgsR0FBRyxRQTA1SG5CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG5hbWVzcGFjZSBPY2Mge1xuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb3VudHJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb3VudHJ5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc29jb2RlXVxuICAgICAqL1xuICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUmVnaW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZWdpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvdW50cnlJc29dXG4gICAgICovXG4gICAgY291bnRyeUlzbz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc29jb2RlXVxuICAgICAqL1xuICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNvY29kZVNob3J0XVxuICAgICAqL1xuICAgIGlzb2NvZGVTaG9ydD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZWdpb25MaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZWdpb25MaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZWdpb25bXX0gW3JlZ2lvbnNdXG4gICAgICovXG4gICAgcmVnaW9ucz86IFJlZ2lvbltdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQWRkcmVzcy5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzcyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29tcGFueU5hbWVdXG4gICAgICovXG4gICAgY29tcGFueU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q291bnRyeX0gW2NvdW50cnldXG4gICAgICovXG4gICAgY291bnRyeT86IENvdW50cnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2RlZmF1bHRBZGRyZXNzXVxuICAgICAqL1xuICAgIGRlZmF1bHRBZGRyZXNzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtlbWFpbF1cbiAgICAgKi9cbiAgICBlbWFpbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmaXJzdE5hbWVdXG4gICAgICovXG4gICAgZmlyc3ROYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZEFkZHJlc3NdXG4gICAgICovXG4gICAgZm9ybWF0dGVkQWRkcmVzcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsYXN0TmFtZV1cbiAgICAgKi9cbiAgICBsYXN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsaW5lMV1cbiAgICAgKi9cbiAgICBsaW5lMT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsaW5lMl1cbiAgICAgKi9cbiAgICBsaW5lMj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwaG9uZV1cbiAgICAgKi9cbiAgICBwaG9uZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwb3N0YWxDb2RlXVxuICAgICAqL1xuICAgIHBvc3RhbENvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UmVnaW9ufSBbcmVnaW9uXVxuICAgICAqL1xuICAgIHJlZ2lvbj86IFJlZ2lvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbc2hpcHBpbmdBZGRyZXNzXVxuICAgICAqL1xuICAgIHNoaXBwaW5nQWRkcmVzcz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGl0bGVdXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGl0bGVDb2RlXVxuICAgICAqL1xuICAgIHRpdGxlQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0b3duXVxuICAgICAqL1xuICAgIHRvd24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3Zpc2libGVJbkFkZHJlc3NCb29rXVxuICAgICAqL1xuICAgIHZpc2libGVJbkFkZHJlc3NCb29rPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEFkZHJlc3NMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc1tdfSBbYWRkcmVzc2VzXVxuICAgICAqL1xuICAgIGFkZHJlc3Nlcz86IEFkZHJlc3NbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEVycm9yTW9kZWwuXG4gICAqIEVycm9yIG1lc3NhZ2VcbiAgICpcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRXJyb3JNb2RlbCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbWVzc2FnZV0gRGVzY3JpcHRpdmUsIGh1bWFuIHJlYWRhYmxlIGVycm9yIG1lc3NhZ2UuXG4gICAgICovXG4gICAgbWVzc2FnZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtyZWFzb25dIEFkZGl0aW9uYWwgY2xhc3NpZmljYXRpb24gc3BlY2lmaWMgZm9yIGVhY2hcbiAgICAgKiBlcnJvciB0eXBlIGUuZy4gJ25vU3RvY2snLlxuICAgICAqL1xuICAgIHJlYXNvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdWJqZWN0XSBJZGVudGlmaWVyIG9mIHRoZSByZWxhdGVkIG9iamVjdCBlLmcuICcxJy5cbiAgICAgKi9cbiAgICBzdWJqZWN0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N1YmplY3RUeXBlXSBUeXBlIG9mIHRoZSBvYmplY3QgcmVsYXRlZCB0byB0aGUgZXJyb3JcbiAgICAgKiBlLmcuICdlbnRyeScuXG4gICAgICovXG4gICAgc3ViamVjdFR5cGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdHlwZV0gVHlwZSBvZiB0aGUgZXJyb3IgZS5nLiAnTG93U3RvY2tFcnJvcicuXG4gICAgICovXG4gICAgdHlwZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEVycm9yTGlzdC5cbiAgICogTGlzdCBvZiBlcnJvcnNcbiAgICpcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRXJyb3JMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtFcnJvck1vZGVsW119IFtlcnJvcnNdXG4gICAgICovXG4gICAgZXJyb3JzPzogRXJyb3JNb2RlbFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQWRkcmVzc1ZhbGlkYXRpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NWYWxpZGF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZWNpc2lvbl1cbiAgICAgKi9cbiAgICBkZWNpc2lvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtFcnJvckxpc3R9IFtlcnJvcnNdXG4gICAgICovXG4gICAgZXJyb3JzPzogRXJyb3JMaXN0O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3NbXX0gW3N1Z2dlc3RlZEFkZHJlc3Nlc11cbiAgICAgKi9cbiAgICBzdWdnZXN0ZWRBZGRyZXNzZXM/OiBBZGRyZXNzW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcmljZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJpY2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2N1cnJlbmN5SXNvXVxuICAgICAqL1xuICAgIGN1cnJlbmN5SXNvPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZFZhbHVlXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZFZhbHVlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW21heFF1YW50aXR5XVxuICAgICAqL1xuICAgIG1heFF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW21pblF1YW50aXR5XVxuICAgICAqL1xuICAgIG1pblF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlVHlwZX0gW3ByaWNlVHlwZV0gUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCVVknLCAnRlJPTSdcbiAgICAgKi9cbiAgICBwcmljZVR5cGU/OiBQcmljZVR5cGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTdG9jay5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RvY2sge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3N0b2NrTGV2ZWxdXG4gICAgICovXG4gICAgc3RvY2tMZXZlbD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdG9ja0xldmVsU3RhdHVzXVxuICAgICAqL1xuICAgIHN0b2NrTGV2ZWxTdGF0dXM/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBJbWFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgSW1hZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2FsdFRleHRdXG4gICAgICovXG4gICAgYWx0VGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXRdXG4gICAgICovXG4gICAgZm9ybWF0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2dhbGxlcnlJbmRleF1cbiAgICAgKi9cbiAgICBnYWxsZXJ5SW5kZXg/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2VUeXBlfSBbaW1hZ2VUeXBlXSBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ1BSSU1BUlknLFxuICAgICAqICdHQUxMRVJZJ1xuICAgICAqL1xuICAgIGltYWdlVHlwZT86IEltYWdlVHlwZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVmFyaWFudE9wdGlvblF1YWxpZmllci5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFyaWFudE9wdGlvblF1YWxpZmllciB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2V9IFtpbWFnZV1cbiAgICAgKi9cbiAgICBpbWFnZT86IEltYWdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtxdWFsaWZpZXJdXG4gICAgICovXG4gICAgcXVhbGlmaWVyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhbHVlXVxuICAgICAqL1xuICAgIHZhbHVlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVmFyaWFudE9wdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFyaWFudE9wdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbcHJpY2VEYXRhXVxuICAgICAqL1xuICAgIHByaWNlRGF0YT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N0b2NrfSBbc3RvY2tdXG4gICAgICovXG4gICAgc3RvY2s/OiBTdG9jaztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXX0gW3ZhcmlhbnRPcHRpb25RdWFsaWZpZXJzXVxuICAgICAqL1xuICAgIHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzPzogVmFyaWFudE9wdGlvblF1YWxpZmllcltdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQmFzZU9wdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQmFzZU9wdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE9wdGlvbltdfSBbb3B0aW9uc11cbiAgICAgKi9cbiAgICBvcHRpb25zPzogVmFyaWFudE9wdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRPcHRpb259IFtzZWxlY3RlZF1cbiAgICAgKi9cbiAgICBzZWxlY3RlZD86IFZhcmlhbnRPcHRpb247XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFyaWFudFR5cGVdXG4gICAgICovXG4gICAgdmFyaWFudFR5cGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTZWFyY2hRdWVyeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUXVlcnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhbHVlXVxuICAgICAqL1xuICAgIHZhbHVlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU2VhcmNoU3RhdGUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNlYXJjaFN0YXRlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTZWFyY2hRdWVyeX0gW3F1ZXJ5XVxuICAgICAqL1xuICAgIHF1ZXJ5PzogU2VhcmNoUXVlcnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEJyZWFkY3J1bWIuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEJyZWFkY3J1bWIge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZhY2V0Q29kZV1cbiAgICAgKi9cbiAgICBmYWNldENvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmFjZXROYW1lXVxuICAgICAqL1xuICAgIGZhY2V0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmYWNldFZhbHVlQ29kZV1cbiAgICAgKi9cbiAgICBmYWNldFZhbHVlQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmYWNldFZhbHVlTmFtZV1cbiAgICAgKi9cbiAgICBmYWNldFZhbHVlTmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTZWFyY2hTdGF0ZX0gW3JlbW92ZVF1ZXJ5XVxuICAgICAqL1xuICAgIHJlbW92ZVF1ZXJ5PzogU2VhcmNoU3RhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U2VhcmNoU3RhdGV9IFt0cnVuY2F0ZVF1ZXJ5XVxuICAgICAqL1xuICAgIHRydW5jYXRlUXVlcnk/OiBTZWFyY2hTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbXBvbmVudC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbbW9kaWZpZWRUaW1lXVxuICAgICAqL1xuICAgIG1vZGlmaWVkVGltZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2FueX0gW290aGVyUHJvcGVydGllc11cbiAgICAgKi9cbiAgICBvdGhlclByb3BlcnRpZXM/OiBhbnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdHlwZUNvZGVdXG4gICAgICovXG4gICAgdHlwZUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdWlkXVxuICAgICAqL1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbXBvbmVudExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvbXBvbmVudFtdfSBbY29tcG9uZW50XVxuICAgICAqL1xuICAgIGNvbXBvbmVudD86IENvbXBvbmVudFtdIHwgYW55W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb250ZW50U2xvdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29udGVudFNsb3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvbXBvbmVudExpc3R9IFtjb21wb25lbnRzXVxuICAgICAqL1xuICAgIGNvbXBvbmVudHM/OiBDb21wb25lbnRMaXN0O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwb3NpdGlvbl1cbiAgICAgKi9cbiAgICBwb3NpdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzbG90SWRdXG4gICAgICovXG4gICAgc2xvdElkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtzbG90U2hhcmVkXVxuICAgICAqL1xuICAgIHNsb3RTaGFyZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Nsb3RTdGF0dXNdXG4gICAgICovXG4gICAgc2xvdFN0YXR1cz86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbnRlbnRTbG90TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29udGVudFNsb3RMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb250ZW50U2xvdFtdfSBbY29udGVudFNsb3RdXG4gICAgICovXG4gICAgY29udGVudFNsb3Q/OiBDb250ZW50U2xvdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ01TUGFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ01TUGFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29udGVudFNsb3RMaXN0fSBbY29udGVudFNsb3RzXVxuICAgICAqL1xuICAgIGNvbnRlbnRTbG90cz86IENvbnRlbnRTbG90TGlzdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZGVmYXVsdFBhZ2VdXG4gICAgICovXG4gICAgZGVmYXVsdFBhZ2U/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0ZW1wbGF0ZV1cbiAgICAgKi9cbiAgICB0ZW1wbGF0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZV1cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0eXBlQ29kZV1cbiAgICAgKi9cbiAgICB0eXBlQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1aWRdXG4gICAgICovXG4gICAgdWlkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2FyZFR5cGUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhcmRUeXBlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2FyZFR5cGVMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXJkVHlwZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhcmRUeXBlW119IFtjYXJkVHlwZXNdXG4gICAgICovXG4gICAgY2FyZFR5cGVzPzogQ2FyZFR5cGVbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvbk9yZGVyRW50cnlDb25zdW1lZC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uT3JkZXJFbnRyeUNvbnN1bWVkIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFthZGp1c3RlZFVuaXRQcmljZV1cbiAgICAgKi9cbiAgICBhZGp1c3RlZFVuaXRQcmljZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbb3JkZXJFbnRyeU51bWJlcl1cbiAgICAgKi9cbiAgICBvcmRlckVudHJ5TnVtYmVyPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uUmVzdHJpY3Rpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvblJlc3RyaWN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtyZXN0cmljdGlvblR5cGVdXG4gICAgICovXG4gICAgcmVzdHJpY3Rpb25UeXBlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmdbXX0gW2NvdWxkRmlyZU1lc3NhZ2VzXVxuICAgICAqL1xuICAgIGNvdWxkRmlyZU1lc3NhZ2VzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2VuYWJsZWRdXG4gICAgICovXG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2VuZERhdGVdXG4gICAgICovXG4gICAgZW5kRGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nW119IFtmaXJlZE1lc3NhZ2VzXVxuICAgICAqL1xuICAgIGZpcmVkTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwcmlvcml0eV1cbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZX0gW3Byb2R1Y3RCYW5uZXJdXG4gICAgICovXG4gICAgcHJvZHVjdEJhbm5lcj86IEltYWdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Byb21vdGlvbkdyb3VwXVxuICAgICAqL1xuICAgIHByb21vdGlvbkdyb3VwPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Byb21vdGlvblR5cGVdXG4gICAgICovXG4gICAgcHJvbW90aW9uVHlwZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN0cmljdGlvbltdfSBbcmVzdHJpY3Rpb25zXVxuICAgICAqL1xuICAgIHJlc3RyaWN0aW9ucz86IFByb21vdGlvblJlc3RyaWN0aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW3N0YXJ0RGF0ZV1cbiAgICAgKi9cbiAgICBzdGFydERhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlXVxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uUmVzdWx0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb25SZXN1bHQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvbk9yZGVyRW50cnlDb25zdW1lZFtdfSBbY29uc3VtZWRFbnRyaWVzXVxuICAgICAqL1xuICAgIGNvbnN1bWVkRW50cmllcz86IFByb21vdGlvbk9yZGVyRW50cnlDb25zdW1lZFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvbn0gW3Byb21vdGlvbl1cbiAgICAgKi9cbiAgICBwcm9tb3Rpb24/OiBQcm9tb3Rpb247XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDdXJyZW5jeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3kge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFthY3RpdmVdXG4gICAgICovXG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc29jb2RlXVxuICAgICAqL1xuICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N5bWJvbF1cbiAgICAgKi9cbiAgICBzeW1ib2w/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWb3VjaGVyLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWb3VjaGVyIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW2FwcGxpZWRWYWx1ZV1cbiAgICAgKi9cbiAgICBhcHBsaWVkVmFsdWU/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q3VycmVuY3l9IFtjdXJyZW5jeV1cbiAgICAgKi9cbiAgICBjdXJyZW5jeT86IEN1cnJlbmN5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtmcmVlU2hpcHBpbmddXG4gICAgICovXG4gICAgZnJlZVNoaXBwaW5nPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVGb3JtYXR0ZWRdXG4gICAgICovXG4gICAgdmFsdWVGb3JtYXR0ZWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVTdHJpbmddXG4gICAgICovXG4gICAgdmFsdWVTdHJpbmc/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdm91Y2hlckNvZGVdXG4gICAgICovXG4gICAgdm91Y2hlckNvZGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBEZWxpdmVyeU1vZGUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5TW9kZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbZGVsaXZlcnlDb3N0XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEdlb1BvaW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBHZW9Qb2ludCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbGF0aXR1ZGVdXG4gICAgICovXG4gICAgbGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIGxvbmdpdHVkZT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFRpbWUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFRpbWUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZEhvdXJdXG4gICAgICovXG4gICAgZm9ybWF0dGVkSG91cj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtob3VyXVxuICAgICAqL1xuICAgIGhvdXI/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbWludXRlXVxuICAgICAqL1xuICAgIG1pbnV0ZT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNwZWNpYWxPcGVuaW5nRGF5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTcGVjaWFsT3BlbmluZ0RheSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2Nsb3NlZF1cbiAgICAgKi9cbiAgICBjbG9zZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1RpbWV9IFtjbG9zaW5nVGltZV1cbiAgICAgKi9cbiAgICBjbG9zaW5nVGltZT86IFRpbWU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29tbWVudF1cbiAgICAgKi9cbiAgICBjb21tZW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtkYXRlXVxuICAgICAqL1xuICAgIGRhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZERhdGVdXG4gICAgICovXG4gICAgZm9ybWF0dGVkRGF0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VGltZX0gW29wZW5pbmdUaW1lXVxuICAgICAqL1xuICAgIG9wZW5pbmdUaW1lPzogVGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFdlZWtkYXlPcGVuaW5nRGF5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBXZWVrZGF5T3BlbmluZ0RheSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2Nsb3NlZF1cbiAgICAgKi9cbiAgICBjbG9zZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1RpbWV9IFtjbG9zaW5nVGltZV1cbiAgICAgKi9cbiAgICBjbG9zaW5nVGltZT86IFRpbWU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VGltZX0gW29wZW5pbmdUaW1lXVxuICAgICAqL1xuICAgIG9wZW5pbmdUaW1lPzogVGltZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt3ZWVrRGF5XVxuICAgICAqL1xuICAgIHdlZWtEYXk/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcGVuaW5nU2NoZWR1bGUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9wZW5pbmdTY2hlZHVsZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTcGVjaWFsT3BlbmluZ0RheVtdfSBbc3BlY2lhbERheU9wZW5pbmdMaXN0XVxuICAgICAqL1xuICAgIHNwZWNpYWxEYXlPcGVuaW5nTGlzdD86IFNwZWNpYWxPcGVuaW5nRGF5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7V2Vla2RheU9wZW5pbmdEYXlbXX0gW3dlZWtEYXlPcGVuaW5nTGlzdF1cbiAgICAgKi9cbiAgICB3ZWVrRGF5T3BlbmluZ0xpc3Q/OiBXZWVrZGF5T3BlbmluZ0RheVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUG9pbnRPZlNlcnZpY2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBvaW50T2ZTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbYWRkcmVzc11cbiAgICAgKi9cbiAgICBhZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkaXNwbGF5TmFtZV1cbiAgICAgKi9cbiAgICBkaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtkaXN0YW5jZUttXVxuICAgICAqL1xuICAgIGRpc3RhbmNlS20/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7eyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmcgfX0gW2ZlYXR1cmVzXVxuICAgICAqL1xuICAgIGZlYXR1cmVzPzogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWREaXN0YW5jZV1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWREaXN0YW5jZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtHZW9Qb2ludH0gW2dlb1BvaW50XVxuICAgICAqL1xuICAgIGdlb1BvaW50PzogR2VvUG9pbnQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2V9IFttYXBJY29uXVxuICAgICAqL1xuICAgIG1hcEljb24/OiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3BlbmluZ1NjaGVkdWxlfSBbb3BlbmluZ0hvdXJzXVxuICAgICAqL1xuICAgIG9wZW5pbmdIb3Vycz86IE9wZW5pbmdTY2hlZHVsZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdG9yZUNvbnRlbnRdXG4gICAgICovXG4gICAgc3RvcmVDb250ZW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlW119IFtzdG9yZUltYWdlc11cbiAgICAgKi9cbiAgICBzdG9yZUltYWdlcz86IEltYWdlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhdGVnb3J5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZX0gW2ltYWdlXVxuICAgICAqL1xuICAgIGltYWdlPzogSW1hZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZlYXR1cmVVbml0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlVW5pdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N5bWJvbF1cbiAgICAgKi9cbiAgICBzeW1ib2w/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdW5pdFR5cGVdXG4gICAgICovXG4gICAgdW5pdFR5cGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGZWF0dXJlVmFsdWUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVWYWx1ZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGZWF0dXJlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2NvbXBhcmFibGVdXG4gICAgICovXG4gICAgY29tcGFyYWJsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmVhdHVyZVVuaXR9IFtmZWF0dXJlVW5pdF1cbiAgICAgKi9cbiAgICBmZWF0dXJlVW5pdD86IEZlYXR1cmVVbml0O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ZlYXR1cmVWYWx1ZVtdfSBbZmVhdHVyZVZhbHVlc11cbiAgICAgKi9cbiAgICBmZWF0dXJlVmFsdWVzPzogRmVhdHVyZVZhbHVlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtyYW5nZV1cbiAgICAgKi9cbiAgICByYW5nZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdHlwZV1cbiAgICAgKi9cbiAgICB0eXBlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2xhc3NpZmljYXRpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENsYXNzaWZpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmVhdHVyZVtdfSBbZmVhdHVyZXNdXG4gICAgICovXG4gICAgZmVhdHVyZXM/OiBGZWF0dXJlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRnV0dXJlU3RvY2suXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZ1dHVyZVN0b2NrIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbZGF0ZV1cbiAgICAgKi9cbiAgICBkYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWREYXRlXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZERhdGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3RvY2t9IFtzdG9ja11cbiAgICAgKi9cbiAgICBzdG9jaz86IFN0b2NrO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJpY2VSYW5nZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJpY2VSYW5nZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFttYXhQcmljZV1cbiAgICAgKi9cbiAgICBtYXhQcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbbWluUHJpY2VdXG4gICAgICovXG4gICAgbWluUHJpY2U/OiBQcmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RSZWZlcmVuY2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RSZWZlcmVuY2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtwcmVzZWxlY3RlZF1cbiAgICAgKi9cbiAgICBwcmVzZWxlY3RlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcmVmZXJlbmNlVHlwZV1cbiAgICAgKi9cbiAgICByZWZlcmVuY2VUeXBlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3R9IFt0YXJnZXRdXG4gICAgICovXG4gICAgdGFyZ2V0PzogUHJvZHVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIExhbmd1YWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2FjdGl2ZV1cbiAgICAgKi9cbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lzb2NvZGVdXG4gICAgICovXG4gICAgaXNvY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmF0aXZlTmFtZV1cbiAgICAgKi9cbiAgICBuYXRpdmVOYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVXNlci5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q3VycmVuY3l9IFtjdXJyZW5jeV1cbiAgICAgKi9cbiAgICBjdXJyZW5jeT86IEN1cnJlbmN5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2N1c3RvbWVySWRdXG4gICAgICovXG4gICAgY3VzdG9tZXJJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbZGVhY3RpdmF0aW9uRGF0ZV1cbiAgICAgKi9cbiAgICBkZWFjdGl2YXRpb25EYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbZGVmYXVsdEFkZHJlc3NdXG4gICAgICovXG4gICAgZGVmYXVsdEFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rpc3BsYXlVaWRdXG4gICAgICovXG4gICAgZGlzcGxheVVpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmaXJzdE5hbWVdXG4gICAgICovXG4gICAgZmlyc3ROYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0xhbmd1YWdlfSBbbGFuZ3VhZ2VdXG4gICAgICovXG4gICAgbGFuZ3VhZ2U/OiBMYW5ndWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsYXN0TmFtZV1cbiAgICAgKi9cbiAgICBsYXN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGl0bGVdXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGl0bGVDb2RlXVxuICAgICAqL1xuICAgIHRpdGxlQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1aWRdXG4gICAgICovXG4gICAgdWlkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUmV2aWV3LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZXZpZXcge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2FsaWFzXVxuICAgICAqL1xuICAgIGFsaWFzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvbW1lbnRdXG4gICAgICovXG4gICAgY29tbWVudD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbZGF0ZV1cbiAgICAgKi9cbiAgICBkYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtoZWFkbGluZV1cbiAgICAgKi9cbiAgICBoZWFkbGluZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtVc2VyfSBbcHJpbmNpcGFsXVxuICAgICAqL1xuICAgIHByaW5jaXBhbD86IFVzZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcmF0aW5nXVxuICAgICAqL1xuICAgIHJhdGluZz86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZhcmlhbnRDYXRlZ29yeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFyaWFudENhdGVnb3J5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbaGFzSW1hZ2VdXG4gICAgICovXG4gICAgaGFzSW1hZ2U/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwcmlvcml0eV1cbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZhcmlhbnRWYWx1ZUNhdGVnb3J5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50VmFsdWVDYXRlZ29yeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3NlcXVlbmNlXVxuICAgICAqL1xuICAgIHNlcXVlbmNlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRDYXRlZ29yeVtdfSBbc3VwZXJDYXRlZ29yaWVzXVxuICAgICAqL1xuICAgIHN1cGVyQ2F0ZWdvcmllcz86IFZhcmlhbnRDYXRlZ29yeVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVmFyaWFudE1hdHJpeEVsZW1lbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRNYXRyaXhFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50TWF0cml4RWxlbWVudFtdfSBbZWxlbWVudHNdXG4gICAgICovXG4gICAgZWxlbWVudHM/OiBWYXJpYW50TWF0cml4RWxlbWVudFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtpc0xlYWZdXG4gICAgICovXG4gICAgaXNMZWFmPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50Q2F0ZWdvcnl9IFtwYXJlbnRWYXJpYW50Q2F0ZWdvcnldXG4gICAgICovXG4gICAgcGFyZW50VmFyaWFudENhdGVnb3J5PzogVmFyaWFudENhdGVnb3J5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRPcHRpb259IFt2YXJpYW50T3B0aW9uXVxuICAgICAqL1xuICAgIHZhcmlhbnRPcHRpb24/OiBWYXJpYW50T3B0aW9uO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRWYWx1ZUNhdGVnb3J5fSBbdmFyaWFudFZhbHVlQ2F0ZWdvcnldXG4gICAgICovXG4gICAgdmFyaWFudFZhbHVlQ2F0ZWdvcnk/OiBWYXJpYW50VmFsdWVDYXRlZ29yeTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFthdmFpbGFibGVGb3JQaWNrdXBdXG4gICAgICovXG4gICAgYXZhaWxhYmxlRm9yUGlja3VwPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFthdmVyYWdlUmF0aW5nXVxuICAgICAqL1xuICAgIGF2ZXJhZ2VSYXRpbmc/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QmFzZU9wdGlvbltdfSBbYmFzZU9wdGlvbnNdXG4gICAgICovXG4gICAgYmFzZU9wdGlvbnM/OiBCYXNlT3B0aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYmFzZVByb2R1Y3RdXG4gICAgICovXG4gICAgYmFzZVByb2R1Y3Q/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2F0ZWdvcnlbXX0gW2NhdGVnb3JpZXNdXG4gICAgICovXG4gICAgY2F0ZWdvcmllcz86IENhdGVnb3J5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2xhc3NpZmljYXRpb25bXX0gW2NsYXNzaWZpY2F0aW9uc11cbiAgICAgKi9cbiAgICBjbGFzc2lmaWNhdGlvbnM/OiBDbGFzc2lmaWNhdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGdXR1cmVTdG9ja1tdfSBbZnV0dXJlU3RvY2tzXVxuICAgICAqL1xuICAgIGZ1dHVyZVN0b2Nrcz86IEZ1dHVyZVN0b2NrW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2VbXX0gW2ltYWdlc11cbiAgICAgKi9cbiAgICBpbWFnZXM/OiBJbWFnZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW21hbnVmYWN0dXJlcl1cbiAgICAgKi9cbiAgICBtYW51ZmFjdHVyZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW211bHRpZGltZW5zaW9uYWxdXG4gICAgICovXG4gICAgbXVsdGlkaW1lbnNpb25hbD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW251bWJlck9mUmV2aWV3c11cbiAgICAgKi9cbiAgICBudW1iZXJPZlJldmlld3M/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uW119IFtwb3RlbnRpYWxQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIHBvdGVudGlhbFByb21vdGlvbnM/OiBQcm9tb3Rpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3ByaWNlXVxuICAgICAqL1xuICAgIHByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2VSYW5nZX0gW3ByaWNlUmFuZ2VdXG4gICAgICovXG4gICAgcHJpY2VSYW5nZT86IFByaWNlUmFuZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdFJlZmVyZW5jZVtdfSBbcHJvZHVjdFJlZmVyZW5jZXNdXG4gICAgICovXG4gICAgcHJvZHVjdFJlZmVyZW5jZXM/OiBQcm9kdWN0UmVmZXJlbmNlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3B1cmNoYXNhYmxlXVxuICAgICAqL1xuICAgIHB1cmNoYXNhYmxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZXZpZXdbXX0gW3Jldmlld3NdXG4gICAgICovXG4gICAgcmV2aWV3cz86IFJldmlld1tdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N0b2NrfSBbc3RvY2tdXG4gICAgICovXG4gICAgc3RvY2s/OiBTdG9jaztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdW1tYXJ5XVxuICAgICAqL1xuICAgIHN1bW1hcnk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50TWF0cml4RWxlbWVudFtdfSBbdmFyaWFudE1hdHJpeF1cbiAgICAgKi9cbiAgICB2YXJpYW50TWF0cml4PzogVmFyaWFudE1hdHJpeEVsZW1lbnRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50T3B0aW9uW119IFt2YXJpYW50T3B0aW9uc11cbiAgICAgKi9cbiAgICB2YXJpYW50T3B0aW9ucz86IFZhcmlhbnRPcHRpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YXJpYW50VHlwZV1cbiAgICAgKi9cbiAgICB2YXJpYW50VHlwZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZVtdfSBbdm9sdW1lUHJpY2VzXVxuICAgICAqL1xuICAgIHZvbHVtZVByaWNlcz86IFByaWNlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3ZvbHVtZVByaWNlc0ZsYWddXG4gICAgICovXG4gICAgdm9sdW1lUHJpY2VzRmxhZz86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlckVudHJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckVudHJ5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW2Jhc2VQcmljZV1cbiAgICAgKi9cbiAgICBiYXNlUHJpY2U/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEZWxpdmVyeU1vZGV9IFtkZWxpdmVyeU1vZGVdXG4gICAgICovXG4gICAgZGVsaXZlcnlNb2RlPzogRGVsaXZlcnlNb2RlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BvaW50T2ZTZXJ2aWNlfSBbZGVsaXZlcnlQb2ludE9mU2VydmljZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlPzogUG9pbnRPZlNlcnZpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZW50cnlOdW1iZXJdXG4gICAgICovXG4gICAgZW50cnlOdW1iZXI/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdH0gW3Byb2R1Y3RdXG4gICAgICovXG4gICAgcHJvZHVjdD86IFByb2R1Y3Q7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlXVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2U/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbdXBkYXRlYWJsZV1cbiAgICAgKi9cbiAgICB1cGRhdGVhYmxlPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeU9yZGVyRW50cnlHcm91cCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2RlbGl2ZXJ5QWRkcmVzc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeUFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnlbXX0gW2VudHJpZXNdXG4gICAgICovXG4gICAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VXaXRoVGF4XVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2VXaXRoVGF4PzogUHJpY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQYXltZW50RGV0YWlscy5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudERldGFpbHMge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2FjY291bnRIb2xkZXJOYW1lXVxuICAgICAqL1xuICAgIGFjY291bnRIb2xkZXJOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFtiaWxsaW5nQWRkcmVzc11cbiAgICAgKi9cbiAgICBiaWxsaW5nQWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY2FyZE51bWJlcl1cbiAgICAgKi9cbiAgICBjYXJkTnVtYmVyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhcmRUeXBlfSBbY2FyZFR5cGVdXG4gICAgICovXG4gICAgY2FyZFR5cGU/OiBDYXJkVHlwZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjdm5dXG4gICAgICovXG4gICAgY3ZuPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtkZWZhdWx0UGF5bWVudF1cbiAgICAgKi9cbiAgICBkZWZhdWx0UGF5bWVudD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZXhwaXJ5TW9udGhdXG4gICAgICovXG4gICAgZXhwaXJ5TW9udGg/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZXhwaXJ5WWVhcl1cbiAgICAgKi9cbiAgICBleHBpcnlZZWFyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lkXVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lzc3VlTnVtYmVyXVxuICAgICAqL1xuICAgIGlzc3VlTnVtYmVyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtzYXZlZF1cbiAgICAgKi9cbiAgICBzYXZlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhcnRNb250aF1cbiAgICAgKi9cbiAgICBzdGFydE1vbnRoPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXJ0WWVhcl1cbiAgICAgKi9cbiAgICBzdGFydFllYXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3Vic2NyaXB0aW9uSWRdXG4gICAgICovXG4gICAgc3Vic2NyaXB0aW9uSWQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQaWNrdXBPcmRlckVudHJ5R3JvdXAuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBpY2t1cE9yZGVyRW50cnlHcm91cCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UG9pbnRPZlNlcnZpY2V9IFtkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5UG9pbnRPZlNlcnZpY2U/OiBQb2ludE9mU2VydmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtkaXN0YW5jZV1cbiAgICAgKi9cbiAgICBkaXN0YW5jZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5W119IFtlbnRyaWVzXVxuICAgICAqL1xuICAgIGVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlV2l0aFRheF1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlV2l0aFRheD86IFByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJpbmNpcGFsLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcmluY2lwYWwge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1aWRdXG4gICAgICovXG4gICAgdWlkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2FydC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FydCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFthcHBsaWVkT3JkZXJQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIGFwcGxpZWRPcmRlclByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN1bHRbXX0gW2FwcGxpZWRQcm9kdWN0UHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWb3VjaGVyW119IFthcHBsaWVkVm91Y2hlcnNdXG4gICAgICovXG4gICAgYXBwbGllZFZvdWNoZXJzPzogVm91Y2hlcltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjYWxjdWxhdGVkXVxuICAgICAqL1xuICAgIGNhbGN1bGF0ZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbZGVsaXZlcnlBZGRyZXNzXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5QWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtkZWxpdmVyeUNvc3RdXG4gICAgICovXG4gICAgZGVsaXZlcnlDb3N0PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZGVsaXZlcnlJdGVtc1F1YW50aXR5XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5SXRlbXNRdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEZWxpdmVyeU1vZGV9IFtkZWxpdmVyeU1vZGVdXG4gICAgICovXG4gICAgZGVsaXZlcnlNb2RlPzogRGVsaXZlcnlNb2RlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwW119IFtkZWxpdmVyeU9yZGVyR3JvdXBzXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5T3JkZXJHcm91cHM/OiBEZWxpdmVyeU9yZGVyRW50cnlHcm91cFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnlbXX0gW2VudHJpZXNdXG4gICAgICovXG4gICAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbZXhwaXJhdGlvblRpbWVdXG4gICAgICovXG4gICAgZXhwaXJhdGlvblRpbWU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2d1aWRdXG4gICAgICovXG4gICAgZ3VpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW25ldF1cbiAgICAgKi9cbiAgICBuZXQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbb3JkZXJEaXNjb3VudHNdXG4gICAgICovXG4gICAgb3JkZXJEaXNjb3VudHM/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYXltZW50RGV0YWlsc30gW3BheW1lbnRJbmZvXVxuICAgICAqL1xuICAgIHBheW1lbnRJbmZvPzogUGF5bWVudERldGFpbHM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcGlja3VwSXRlbXNRdWFudGl0eV1cbiAgICAgKi9cbiAgICBwaWNrdXBJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BpY2t1cE9yZGVyRW50cnlHcm91cFtdfSBbcGlja3VwT3JkZXJHcm91cHNdXG4gICAgICovXG4gICAgcGlja3VwT3JkZXJHcm91cHM/OiBQaWNrdXBPcmRlckVudHJ5R3JvdXBbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN1bHRbXX0gW3BvdGVudGlhbE9yZGVyUHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBwb3RlbnRpYWxPcmRlclByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN1bHRbXX0gW3BvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtwcm9kdWN0RGlzY291bnRzXVxuICAgICAqL1xuICAgIHByb2R1Y3REaXNjb3VudHM/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbc2F2ZVRpbWVdXG4gICAgICovXG4gICAgc2F2ZVRpbWU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaW5jaXBhbH0gW3NhdmVkQnldXG4gICAgICovXG4gICAgc2F2ZWRCeT86IFByaW5jaXBhbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzaXRlXVxuICAgICAqL1xuICAgIHNpdGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RvcmVdXG4gICAgICovXG4gICAgc3RvcmU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtzdWJUb3RhbF1cbiAgICAgKi9cbiAgICBzdWJUb3RhbD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxEaXNjb3VudHNdXG4gICAgICovXG4gICAgdG90YWxEaXNjb3VudHM/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbEl0ZW1zXVxuICAgICAqL1xuICAgIHRvdGFsSXRlbXM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlXVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2U/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VXaXRoVGF4XVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2VXaXRoVGF4PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFRheF1cbiAgICAgKi9cbiAgICB0b3RhbFRheD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsVW5pdENvdW50XVxuICAgICAqL1xuICAgIHRvdGFsVW5pdENvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaW5jaXBhbH0gW3VzZXJdXG4gICAgICovXG4gICAgdXNlcj86IFByaW5jaXBhbDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhcnRMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXJ0TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2FydFtdfSBbY2FydHNdXG4gICAgICovXG4gICAgY2FydHM/OiBDYXJ0W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXJ0TW9kaWZpY2F0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXJ0TW9kaWZpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZGVsaXZlcnlNb2RlQ2hhbmdlZF1cbiAgICAgKi9cbiAgICBkZWxpdmVyeU1vZGVDaGFuZ2VkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5fSBbZW50cnldXG4gICAgICovXG4gICAgZW50cnk/OiBPcmRlckVudHJ5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5QWRkZWRdXG4gICAgICovXG4gICAgcXVhbnRpdHlBZGRlZD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNDb2RlXVxuICAgICAqL1xuICAgIHN0YXR1c0NvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzTWVzc2FnZV1cbiAgICAgKi9cbiAgICBzdGF0dXNNZXNzYWdlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2F0ZWdvcnlIaWVyYXJjaHkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5SGllcmFyY2h5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbbGFzdE1vZGlmaWVkXVxuICAgICAqL1xuICAgIGxhc3RNb2RpZmllZD86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhdGVnb3J5SGllcmFyY2h5W119IFtzdWJjYXRlZ29yaWVzXVxuICAgICAqL1xuICAgIHN1YmNhdGVnb3JpZXM/OiBDYXRlZ29yeUhpZXJhcmNoeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXRhbG9nVmVyc2lvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2F0YWxvZ1ZlcnNpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhdGVnb3J5SGllcmFyY2h5W119IFtjYXRlZ29yaWVzXVxuICAgICAqL1xuICAgIGNhdGVnb3JpZXM/OiBDYXRlZ29yeUhpZXJhcmNoeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lkXVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtsYXN0TW9kaWZpZWRdXG4gICAgICovXG4gICAgbGFzdE1vZGlmaWVkPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhdGFsb2cuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhdGFsb2cge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhdGFsb2dWZXJzaW9uW119IFtjYXRhbG9nVmVyc2lvbnNdXG4gICAgICovXG4gICAgY2F0YWxvZ1ZlcnNpb25zPzogQ2F0YWxvZ1ZlcnNpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbbGFzdE1vZGlmaWVkXVxuICAgICAqL1xuICAgIGxhc3RNb2RpZmllZD86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXRhbG9nTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2F0YWxvZ0xpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhdGFsb2dbXX0gW2NhdGFsb2dzXVxuICAgICAqL1xuICAgIGNhdGFsb2dzPzogQ2F0YWxvZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29tcG9uZW50SURMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRJRExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ1tdfSBbaWRMaXN0XVxuICAgICAqL1xuICAgIGlkTGlzdD86IHN0cmluZ1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29uc2lnbm1lbnRFbnRyeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29uc2lnbm1lbnRFbnRyeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeX0gW29yZGVyRW50cnldXG4gICAgICovXG4gICAgb3JkZXJFbnRyeT86IE9yZGVyRW50cnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc2hpcHBlZFF1YW50aXR5XVxuICAgICAqL1xuICAgIHNoaXBwZWRRdWFudGl0eT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbnNpZ25tZW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zaWdubWVudCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BvaW50T2ZTZXJ2aWNlfSBbZGVsaXZlcnlQb2ludE9mU2VydmljZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlPzogUG9pbnRPZlNlcnZpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29uc2lnbm1lbnRFbnRyeVtdfSBbZW50cmllc11cbiAgICAgKi9cbiAgICBlbnRyaWVzPzogQ29uc2lnbm1lbnRFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFtzaGlwcGluZ0FkZHJlc3NdXG4gICAgICovXG4gICAgc2hpcHBpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtzdGF0dXNEYXRlXVxuICAgICAqL1xuICAgIHN0YXR1c0RhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RyYWNraW5nSURdXG4gICAgICovXG4gICAgdHJhY2tpbmdJRD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvdW50cnlMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb3VudHJ5TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q291bnRyeVtdfSBbY291bnRyaWVzXVxuICAgICAqL1xuICAgIGNvdW50cmllcz86IENvdW50cnlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEN1cnJlbmN5TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ3VycmVuY3lMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDdXJyZW5jeVtdfSBbY3VycmVuY2llc11cbiAgICAgKi9cbiAgICBjdXJyZW5jaWVzPzogQ3VycmVuY3lbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIERlbGl2ZXJ5TW9kZUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5TW9kZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RlbGl2ZXJ5TW9kZVtdfSBbZGVsaXZlcnlNb2Rlc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeU1vZGVzPzogRGVsaXZlcnlNb2RlW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGYWNldFZhbHVlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGYWNldFZhbHVlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtjb3VudF1cbiAgICAgKi9cbiAgICBjb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U2VhcmNoU3RhdGV9IFtxdWVyeV1cbiAgICAgKi9cbiAgICBxdWVyeT86IFNlYXJjaFN0YXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtzZWxlY3RlZF1cbiAgICAgKi9cbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGYWNldC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRmFjZXQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjYXRlZ29yeV1cbiAgICAgKi9cbiAgICBjYXRlZ29yeT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW211bHRpU2VsZWN0XVxuICAgICAqL1xuICAgIG11bHRpU2VsZWN0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcHJpb3JpdHldXG4gICAgICovXG4gICAgcHJpb3JpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmFjZXRWYWx1ZVtdfSBbdG9wVmFsdWVzXVxuICAgICAqL1xuICAgIHRvcFZhbHVlcz86IEZhY2V0VmFsdWVbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGYWNldFZhbHVlW119IFt2YWx1ZXNdXG4gICAgICovXG4gICAgdmFsdWVzPzogRmFjZXRWYWx1ZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFt2aXNpYmxlXVxuICAgICAqL1xuICAgIHZpc2libGU/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgTGFuZ3VhZ2VMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0xhbmd1YWdlW119IFtsYW5ndWFnZXNdXG4gICAgICovXG4gICAgbGFuZ3VhZ2VzPzogTGFuZ3VhZ2VbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBhZ2luYXRpb24uXG4gICAqIFBhZ2luYXRpb24gaW5mb1xuICAgKlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtjb3VudF0gTnVtYmVyIG9mIGVsZW1lbnRzIG9uIHRoaXMgcGFnZVxuICAgICAqL1xuICAgIGNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3BhZ2VdIEN1cnJlbnQgcGFnZSBudW1iZXJcbiAgICAgKi9cbiAgICBwYWdlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsQ291bnRdIFRvdGFsIG51bWJlciBvZiBlbGVtZW50c1xuICAgICAqL1xuICAgIHRvdGFsQ291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxQYWdlc10gVG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICovXG4gICAgdG90YWxQYWdlcz86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNvcnQuXG4gICAqIFNvcnQgb3B0aW9uXG4gICAqXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNvcnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFthc2NdXG4gICAgICovXG4gICAgYXNjPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBMaXN0QWRhcHRlZENvbXBvbmVudHMuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIExpc3RBZGFwdGVkQ29tcG9uZW50cyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7YW55W119IFtjb21wb25lbnRzXVxuICAgICAqL1xuICAgIGNvbXBvbmVudHM/OiBhbnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYWdpbmF0aW9ufSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3J0W119IFtzb3J0c11cbiAgICAgKi9cbiAgICBzb3J0cz86IFNvcnRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE1lbWJlckxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE1lbWJlckxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaW5jaXBhbFtdfSBbbWVtYmVyc11cbiAgICAgKi9cbiAgICBtZW1iZXJzPzogUHJpbmNpcGFsW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlckVudHJ5TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJFbnRyeUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnlbXX0gW29yZGVyRW50cmllc11cbiAgICAgKi9cbiAgICBvcmRlckVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlckhpc3RvcnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVySGlzdG9yeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2d1aWRdXG4gICAgICovXG4gICAgZ3VpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbcGxhY2VkXVxuICAgICAqL1xuICAgIHBsYWNlZD86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzXVxuICAgICAqL1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNEaXNwbGF5XVxuICAgICAqL1xuICAgIHN0YXR1c0Rpc3BsYXk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbF1cbiAgICAgKi9cbiAgICB0b3RhbD86IFByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGFnaW5hdGlvbk1vZGVsLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uTW9kZWwge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2N1cnJlbnRQYWdlXVxuICAgICAqL1xuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3BhZ2VTaXplXVxuICAgICAqL1xuICAgIHBhZ2VTaXplPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3NvcnRdXG4gICAgICovXG4gICAgc29ydD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFBhZ2VzXVxuICAgICAqL1xuICAgIHRvdGFsUGFnZXM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxSZXN1bHRzXVxuICAgICAqL1xuICAgIHRvdGFsUmVzdWx0cz86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNvcnRNb2RlbC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU29ydE1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtzZWxlY3RlZF1cbiAgICAgKi9cbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlckhpc3RvcnlMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckhpc3RvcnlMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckhpc3RvcnlbXX0gW29yZGVyc11cbiAgICAgKi9cbiAgICBvcmRlcnM/OiBPcmRlckhpc3RvcnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYWdpbmF0aW9uTW9kZWx9IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U29ydE1vZGVsW119IFtzb3J0c11cbiAgICAgKi9cbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Jhc2VTaXRlSWRdXG4gICAgICovXG4gICAgYmFzZVNpdGVJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzXVxuICAgICAqL1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyU3RhdHVzVXBkYXRlRWxlbWVudFtdfSBbb3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50c11cbiAgICAgKi9cbiAgICBvcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnRzPzogT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlci5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXIge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbYXBwbGllZE9yZGVyUHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFthcHBsaWVkUHJvZHVjdFByb21vdGlvbnNdXG4gICAgICovXG4gICAgYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Vm91Y2hlcltdfSBbYXBwbGllZFZvdWNoZXJzXVxuICAgICAqL1xuICAgIGFwcGxpZWRWb3VjaGVycz86IFZvdWNoZXJbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2FsY3VsYXRlZF1cbiAgICAgKi9cbiAgICBjYWxjdWxhdGVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29uc2lnbm1lbnRbXX0gW2NvbnNpZ25tZW50c11cbiAgICAgKi9cbiAgICBjb25zaWdubWVudHM/OiBDb25zaWdubWVudFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtjcmVhdGVkXVxuICAgICAqL1xuICAgIGNyZWF0ZWQ/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFtkZWxpdmVyeUFkZHJlc3NdXG4gICAgICovXG4gICAgZGVsaXZlcnlBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW2RlbGl2ZXJ5Q29zdF1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUNvc3Q/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtkZWxpdmVyeUl0ZW1zUXVhbnRpdHldXG4gICAgICovXG4gICAgZGVsaXZlcnlJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RlbGl2ZXJ5TW9kZX0gW2RlbGl2ZXJ5TW9kZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeU1vZGU/OiBEZWxpdmVyeU1vZGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXX0gW2RlbGl2ZXJ5T3JkZXJHcm91cHNdXG4gICAgICovXG4gICAgZGVsaXZlcnlPcmRlckdyb3Vwcz86IERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVsaXZlcnlTdGF0dXNdXG4gICAgICovXG4gICAgZGVsaXZlcnlTdGF0dXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVsaXZlcnlTdGF0dXNEaXNwbGF5XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5U3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5W119IFtlbnRyaWVzXVxuICAgICAqL1xuICAgIGVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2d1ZXN0Q3VzdG9tZXJdXG4gICAgICovXG4gICAgZ3Vlc3RDdXN0b21lcj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZ3VpZF1cbiAgICAgKi9cbiAgICBndWlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtuZXRdXG4gICAgICovXG4gICAgbmV0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW29yZGVyRGlzY291bnRzXVxuICAgICAqL1xuICAgIG9yZGVyRGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGF5bWVudERldGFpbHN9IFtwYXltZW50SW5mb11cbiAgICAgKi9cbiAgICBwYXltZW50SW5mbz86IFBheW1lbnREZXRhaWxzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3BpY2t1cEl0ZW1zUXVhbnRpdHldXG4gICAgICovXG4gICAgcGlja3VwSXRlbXNRdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQaWNrdXBPcmRlckVudHJ5R3JvdXBbXX0gW3BpY2t1cE9yZGVyR3JvdXBzXVxuICAgICAqL1xuICAgIHBpY2t1cE9yZGVyR3JvdXBzPzogUGlja3VwT3JkZXJFbnRyeUdyb3VwW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtwcm9kdWN0RGlzY291bnRzXVxuICAgICAqL1xuICAgIHByb2R1Y3REaXNjb3VudHM/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzaXRlXVxuICAgICAqL1xuICAgIHNpdGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzXVxuICAgICAqL1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNEaXNwbGF5XVxuICAgICAqL1xuICAgIHN0YXR1c0Rpc3BsYXk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RvcmVdXG4gICAgICovXG4gICAgc3RvcmU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtzdWJUb3RhbF1cbiAgICAgKi9cbiAgICBzdWJUb3RhbD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxEaXNjb3VudHNdXG4gICAgICovXG4gICAgdG90YWxEaXNjb3VudHM/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbEl0ZW1zXVxuICAgICAqL1xuICAgIHRvdGFsSXRlbXM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlXVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2U/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VXaXRoVGF4XVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2VXaXRoVGF4PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFRheF1cbiAgICAgKi9cbiAgICB0b3RhbFRheD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnlbXX0gW3VuY29uc2lnbmVkRW50cmllc11cbiAgICAgKi9cbiAgICB1bmNvbnNpZ25lZEVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpbmNpcGFsfSBbdXNlcl1cbiAgICAgKi9cbiAgICB1c2VyPzogUHJpbmNpcGFsO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGF5bWVudERldGFpbHNMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQYXltZW50RGV0YWlsc0xpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BheW1lbnREZXRhaWxzW119IFtwYXltZW50c11cbiAgICAgKi9cbiAgICBwYXltZW50cz86IFBheW1lbnREZXRhaWxzW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQb2ludE9mU2VydmljZVN0b2NrLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQb2ludE9mU2VydmljZVN0b2NrIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbYWRkcmVzc11cbiAgICAgKi9cbiAgICBhZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkaXNwbGF5TmFtZV1cbiAgICAgKi9cbiAgICBkaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtkaXN0YW5jZUttXVxuICAgICAqL1xuICAgIGRpc3RhbmNlS20/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7eyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmcgfX0gW2ZlYXR1cmVzXVxuICAgICAqL1xuICAgIGZlYXR1cmVzPzogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWREaXN0YW5jZV1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWREaXN0YW5jZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtHZW9Qb2ludH0gW2dlb1BvaW50XVxuICAgICAqL1xuICAgIGdlb1BvaW50PzogR2VvUG9pbnQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2V9IFttYXBJY29uXVxuICAgICAqL1xuICAgIG1hcEljb24/OiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3BlbmluZ1NjaGVkdWxlfSBbb3BlbmluZ0hvdXJzXVxuICAgICAqL1xuICAgIG9wZW5pbmdIb3Vycz86IE9wZW5pbmdTY2hlZHVsZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdG9ja30gW3N0b2NrSW5mb11cbiAgICAgKi9cbiAgICBzdG9ja0luZm8/OiBTdG9jaztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdG9yZUNvbnRlbnRdXG4gICAgICovXG4gICAgc3RvcmVDb250ZW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlW119IFtzdG9yZUltYWdlc11cbiAgICAgKi9cbiAgICBzdG9yZUltYWdlcz86IEltYWdlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjYXRhbG9nSWRdXG4gICAgICovXG4gICAgY2F0YWxvZ0lkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhdGFsb2dWZXJzaW9uXVxuICAgICAqL1xuICAgIGNhdGFsb2dWZXJzaW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudFtdfSBbcHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50c11cbiAgICAgKi9cbiAgICBwcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnRzPzogUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhdGFsb2ddXG4gICAgICovXG4gICAgY2F0YWxvZz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtjdXJyZW50UGFnZV1cbiAgICAgKi9cbiAgICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0W119IFtwcm9kdWN0c11cbiAgICAgKi9cbiAgICBwcm9kdWN0cz86IFByb2R1Y3RbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFBhZ2VDb3VudF1cbiAgICAgKi9cbiAgICB0b3RhbFBhZ2VDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFByb2R1Y3RDb3VudF1cbiAgICAgKi9cbiAgICB0b3RhbFByb2R1Y3RDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2ZXJzaW9uXVxuICAgICAqL1xuICAgIHZlcnNpb24/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0UmVmZXJlbmNlTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFJlZmVyZW5jZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RSZWZlcmVuY2VbXX0gW3JlZmVyZW5jZXNdXG4gICAgICovXG4gICAgcmVmZXJlbmNlcz86IFByb2R1Y3RSZWZlcmVuY2VbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNwZWxsaW5nU3VnZ2VzdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3BlbGxpbmdTdWdnZXN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtxdWVyeV1cbiAgICAgKi9cbiAgICBxdWVyeT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdWdnZXN0aW9uXVxuICAgICAqL1xuICAgIHN1Z2dlc3Rpb24/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0U2VhcmNoUGFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFNlYXJjaFBhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0JyZWFkY3J1bWJbXX0gW2JyZWFkY3J1bWJzXVxuICAgICAqL1xuICAgIGJyZWFkY3J1bWJzPzogQnJlYWRjcnVtYltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhdGVnb3J5Q29kZV1cbiAgICAgKi9cbiAgICBjYXRlZ29yeUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U2VhcmNoU3RhdGV9IFtjdXJyZW50UXVlcnldXG4gICAgICovXG4gICAgY3VycmVudFF1ZXJ5PzogU2VhcmNoU3RhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmFjZXRbXX0gW2ZhY2V0c11cbiAgICAgKi9cbiAgICBmYWNldHM/OiBGYWNldFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZyZWVUZXh0U2VhcmNoXVxuICAgICAqL1xuICAgIGZyZWVUZXh0U2VhcmNoPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2tleXdvcmRSZWRpcmVjdFVybF1cbiAgICAgKi9cbiAgICBrZXl3b3JkUmVkaXJlY3RVcmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGFnaW5hdGlvbk1vZGVsfSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RbXX0gW3Byb2R1Y3RzXVxuICAgICAqL1xuICAgIHByb2R1Y3RzPzogUHJvZHVjdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRNb2RlbFtdfSBbc29ydHNdXG4gICAgICovXG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTcGVsbGluZ1N1Z2dlc3Rpb259IFtzcGVsbGluZ1N1Z2dlc3Rpb25dXG4gICAgICovXG4gICAgc3BlbGxpbmdTdWdnZXN0aW9uPzogU3BlbGxpbmdTdWdnZXN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uW119IFtwcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIHByb21vdGlvbnM/OiBQcm9tb3Rpb25bXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvblJlc3VsdExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvblJlc3VsdExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbcHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBwcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZXZpZXdMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZXZpZXdMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZXZpZXdbXX0gW3Jldmlld3NdXG4gICAgICovXG4gICAgcmV2aWV3cz86IFJldmlld1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU2F2ZUNhcnRSZXN1bHQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNhdmVDYXJ0UmVzdWx0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXJ0fSBbc2F2ZWRDYXJ0RGF0YV1cbiAgICAgKi9cbiAgICBzYXZlZENhcnREYXRhPzogQ2FydDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN0b3JlRmluZGVyU2VhcmNoUGFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RvcmVGaW5kZXJTZWFyY2hQYWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZEVhc3RMb25naXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRFYXN0TG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kTm9ydGhMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZE5vcnRoTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRTb3V0aExhdGl0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kU291dGhMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZFdlc3RMb25naXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRXZXN0TG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2xvY2F0aW9uVGV4dF1cbiAgICAgKi9cbiAgICBsb2NhdGlvblRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGFnaW5hdGlvbk1vZGVsfSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRNb2RlbFtdfSBbc29ydHNdXG4gICAgICovXG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzb3VyY2VMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBzb3VyY2VMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzb3VyY2VMb25naXR1ZGVdXG4gICAgICovXG4gICAgc291cmNlTG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BvaW50T2ZTZXJ2aWNlW119IFtzdG9yZXNdXG4gICAgICovXG4gICAgc3RvcmVzPzogUG9pbnRPZlNlcnZpY2VbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN0b3JlRmluZGVyU3RvY2tTZWFyY2hQYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9yZUZpbmRlclN0b2NrU2VhcmNoUGFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRFYXN0TG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kRWFzdExvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZE5vcnRoTGF0aXR1ZGVdXG4gICAgICovXG4gICAgYm91bmROb3J0aExhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kU291dGhMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZFNvdXRoTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRXZXN0TG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kV2VzdExvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsb2NhdGlvblRleHRdXG4gICAgICovXG4gICAgbG9jYXRpb25UZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb25Nb2RlbH0gW3BhZ2luYXRpb25dXG4gICAgICovXG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0fSBbcHJvZHVjdF1cbiAgICAgKi9cbiAgICBwcm9kdWN0PzogUHJvZHVjdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3J0TW9kZWxbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc291cmNlTGF0aXR1ZGVdXG4gICAgICovXG4gICAgc291cmNlTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc291cmNlTG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIHNvdXJjZUxvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQb2ludE9mU2VydmljZVN0b2NrW119IFtzdG9yZXNdXG4gICAgICovXG4gICAgc3RvcmVzPzogUG9pbnRPZlNlcnZpY2VTdG9ja1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3VnZ2VzdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTdWdnZXN0aW9uTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbkxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N1Z2dlc3Rpb25bXX0gW3N1Z2dlc3Rpb25zXVxuICAgICAqL1xuICAgIHN1Z2dlc3Rpb25zPzogU3VnZ2VzdGlvbltdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVGl0bGUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFRpdGxlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVGl0bGVMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBUaXRsZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1RpdGxlW119IFt0aXRsZXNdXG4gICAgICovXG4gICAgdGl0bGVzPzogVGl0bGVbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFVzZXJHcm91cC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVXNlckdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWxbXX0gW21lbWJlcnNdXG4gICAgICovXG4gICAgbWVtYmVycz86IFByaW5jaXBhbFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW21lbWJlcnNDb3VudF1cbiAgICAgKi9cbiAgICBtZW1iZXJzQ291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1VzZXJHcm91cFtdfSBbc3ViR3JvdXBzXVxuICAgICAqL1xuICAgIHN1Ykdyb3Vwcz86IFVzZXJHcm91cFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBVc2VyR3JvdXBMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBVc2VyR3JvdXBMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtjdXJyZW50UGFnZV1cbiAgICAgKi9cbiAgICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtudW1iZXJPZlBhZ2VzXVxuICAgICAqL1xuICAgIG51bWJlck9mUGFnZXM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcGFnZVNpemVdXG4gICAgICovXG4gICAgcGFnZVNpemU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxOdW1iZXJdXG4gICAgICovXG4gICAgdG90YWxOdW1iZXI/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VXNlckdyb3VwW119IFt1c2VyR3JvdXBzXVxuICAgICAqL1xuICAgIHVzZXJHcm91cHM/OiBVc2VyR3JvdXBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFVzZXJTaWduVXAuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFVzZXJTaWduVXAge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZpcnN0TmFtZV1cbiAgICAgKi9cbiAgICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbGFzdE5hbWVdXG4gICAgICovXG4gICAgbGFzdE5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcGFzc3dvcmRdXG4gICAgICovXG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGl0bGVDb2RlXVxuICAgICAqL1xuICAgIHRpdGxlQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1aWRdXG4gICAgICovXG4gICAgdWlkPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9yZUNvdW50IHtcbiAgICBjb3VudD86IG51bWJlcjtcbiAgICBpc29Db2RlPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RvcmVDb3VudExpc3Qge1xuICAgIGNvdW50cmllc0FuZFJlZ2lvbnNTdG9yZUNvdW50PzogU3RvcmVDb3VudFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVm91Y2hlckxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZvdWNoZXJMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWb3VjaGVyW119IFt2b3VjaGVyc11cbiAgICAgKi9cbiAgICB2b3VjaGVycz86IFZvdWNoZXJbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgUHJpY2VUeXBlLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JVWScsICdGUk9NJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBQcmljZVR5cGUgPSA8UHJpY2VUeXBlPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gUHJpY2VUeXBlIHtcbiAgICBCVVkgPSAnQlVZJyxcbiAgICBGUk9NID0gJ0ZST00nLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBJbWFnZVR5cGUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnUFJJTUFSWScsICdHQUxMRVJZJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBJbWFnZVR5cGUgPSA8SW1hZ2VUeXBlPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gSW1hZ2VUeXBlIHtcbiAgICBQUklNQVJZID0gJ1BSSU1BUlknLFxuICAgIEdBTExFUlkgPSAnR0FMTEVSWScsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkcy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkcyA9IDxGaWVsZHM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxID0gPEZpZWxkczE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMiA9IDxGaWVsZHMyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczMgPSA8RmllbGRzMz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0ID0gPEZpZWxkczQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNSA9IDxGaWVsZHM1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczYgPSA8RmllbGRzNj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIFBhZ2VUeXBlLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0NvbnRlbnRQYWdlJywgJ1Byb2R1Y3RQYWdlJywgJ0NhdGVnb3J5UGFnZScsXG4gICAqICdDYXRhbG9nUGFnZSdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogUGFnZVR5cGUgPSA8UGFnZVR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBQYWdlVHlwZSB7XG4gICAgQ09OVEVOVF9QQUdFID0gJ0NvbnRlbnRQYWdlJyxcbiAgICBQUk9EVUNUX1BBR0UgPSAnUHJvZHVjdFBhZ2UnLFxuICAgIENBVEVHT1JZX1BBR0UgPSAnQ2F0ZWdvcnlQYWdlJyxcbiAgICBDQVRBTE9HX1BBR0UgPSAnQ2F0YWxvZ1BhZ2UnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNyA9IDxGaWVsZHM3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzOC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczggPSA8RmllbGRzOD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczgge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM5ID0gPEZpZWxkczk+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxMC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEwID0gPEZpZWxkczEwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczExLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTEgPSA8RmllbGRzMTE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxMSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxMiA9IDxGaWVsZHMxMj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczEyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxMy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEzID0gPEZpZWxkczEzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTQgPSA8RmllbGRzMTQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxNCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxNSA9IDxGaWVsZHMxNT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxNi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE2ID0gPEZpZWxkczE2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIFNvcnRFbnVtLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogU29ydEVudW0gPSA8U29ydEVudW0+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBTb3J0RW51bSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxNyA9IDxGaWVsZHMxNz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxOC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE4ID0gPEZpZWxkczE4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTgge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE5LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTkgPSA8RmllbGRzMTk+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxOSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjAuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyMCA9IDxGaWVsZHMyMD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczIwIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyMS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczIxID0gPEZpZWxkczIxPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczIyLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjIgPSA8RmllbGRzMjI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyMiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjMuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyMyA9IDxGaWVsZHMyMz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczIzIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyNC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI0ID0gPEZpZWxkczI0Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI1LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjUgPSA8RmllbGRzMjU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyNSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjYuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyNiA9IDxGaWVsZHMyNj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI2IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyNy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI3ID0gPEZpZWxkczI3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjggPSA8RmllbGRzMjg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyOCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyOSA9IDxGaWVsZHMyOT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzMC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczMwID0gPEZpZWxkczMwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczMxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzEgPSA8RmllbGRzMzE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzMSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzMiA9IDxGaWVsZHMzMj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczMyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzMy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczMzID0gPEZpZWxkczMzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzQgPSA8RmllbGRzMzQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzNCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzNSA9IDxGaWVsZHMzNT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzNi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM2ID0gPEZpZWxkczM2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzcgPSA8RmllbGRzMzc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzNyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzguXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzOCA9IDxGaWVsZHMzOD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM4IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzOS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM5ID0gPEZpZWxkczM5Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDAgPSA8RmllbGRzNDA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0MCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0MSA9IDxGaWVsZHM0MT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0Mi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQyID0gPEZpZWxkczQyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDIge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDMgPSA8RmllbGRzNDM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0MyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0NCA9IDxGaWVsZHM0ND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0NS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ1ID0gPEZpZWxkczQ1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDUge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDYgPSA8RmllbGRzNDY+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0NiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0NyA9IDxGaWVsZHM0Nz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0OC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ4ID0gPEZpZWxkczQ4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDgge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ5LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDkgPSA8RmllbGRzNDk+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0OSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTAuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1MCA9IDxGaWVsZHM1MD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczUwIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1MS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczUxID0gPEZpZWxkczUxPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczUyLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTIgPSA8RmllbGRzNTI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1MiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTMuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1MyA9IDxGaWVsZHM1Mz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczUzIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1NC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU0ID0gPEZpZWxkczU0Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU1LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTUgPSA8RmllbGRzNTU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1NSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTYuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1NiA9IDxGaWVsZHM1Nj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU2IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1Ny5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU3ID0gPEZpZWxkczU3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTggPSA8RmllbGRzNTg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1OCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1OSA9IDxGaWVsZHM1OT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM2MC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczYwID0gPEZpZWxkczYwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNjAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczYxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNjEgPSA8RmllbGRzNjE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM2MSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgVHlwZS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdhbGwnLCAncHJvZHVjdCcsICdvcmRlcidcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogVHlwZSA9IDxUeXBlPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gVHlwZSB7XG4gICAgQWxsID0gJ2FsbCcsXG4gICAgUHJvZHVjdCA9ICdwcm9kdWN0JyxcbiAgICBPcmRlciA9ICdvcmRlcicsXG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEFub255bW91c0NvbnNlbnQge1xuICAgIHRlbXBsYXRlQ29kZT86IHN0cmluZztcbiAgICB2ZXJzaW9uPzogbnVtYmVyO1xuICAgIGNvbnNlbnRTdGF0ZT86IENPTlNFTlRfU1RBVFVTO1xuICB9XG5cbiAgZXhwb3J0IGVudW0gQ09OU0VOVF9TVEFUVVMge1xuICAgIEFOT05ZTU9VU19DT05TRU5UX0dJVkVOID0gJ0dJVkVOJyxcbiAgICBBTk9OWU1PVVNfQ09OU0VOVF9XSVRIRFJBV04gPSAnV0lUSERSQVdOJyxcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29uc2VudFRlbXBsYXRlIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHZlcnNpb24/OiBudW1iZXI7XG4gICAgY3VycmVudENvbnNlbnQ/OiBDb25zZW50O1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zZW50IHtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIGNvbnNlbnRHaXZlbkRhdGU/OiBEYXRlO1xuICAgIGNvbnNlbnRXaXRoZHJhd25EYXRlPzogRGF0ZTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29uc2VudFRlbXBsYXRlTGlzdCB7XG4gICAgY29uc2VudFRlbXBsYXRlcz86IENvbnNlbnRUZW1wbGF0ZVtdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBCYXNlU2l0ZXMge1xuICAgIGJhc2VTaXRlcz86IEJhc2VTaXRlW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJhc2VTaXRlIHtcbiAgICBjaGFubmVsPzogc3RyaW5nO1xuICAgIGRlZmF1bHRMYW5ndWFnZT86IExhbmd1YWdlO1xuICAgIGRlZmF1bHRQcmV2aWV3Q2F0YWxvZ0lkPzogc3RyaW5nO1xuICAgIGRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlPzogc3RyaW5nO1xuICAgIGRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGU/OiBzdHJpbmc7XG4gICAgbG9jYWxlPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgdGhlbWU/OiBzdHJpbmc7XG4gICAgdWlkPzogc3RyaW5nO1xuICAgIHN0b3Jlcz86IEJhc2VTdG9yZVtdO1xuICAgIHVybFBhdHRlcm5zPzogc3RyaW5nW107XG4gICAgdXJsRW5jb2RpbmdBdHRyaWJ1dGVzPzogc3RyaW5nW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJhc2VTdG9yZSB7XG4gICAgY3VycmVuY2llcz86IEN1cnJlbmN5W107XG4gICAgZGVmYXVsdEN1cnJlbmN5PzogQ3VycmVuY3k7XG4gICAgbGFuZ3VhZ2VzPzogTGFuZ3VhZ2VbXTtcbiAgICBkZWZhdWx0TGFuZ3VhZ2U/OiBMYW5ndWFnZTtcbiAgfVxufVxuIl19