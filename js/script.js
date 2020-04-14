$(function () {
    // Select us input with variables
    let quantityEmployers = $('[name="quantity-employers"]');
    let showTotal = $('#per-monthly');
    let monthlyParcel = $('#enterprise');
    let regimeLP = $('#regime_lp');
    let regimeSN = $('#regime_sn');
    let typeEnterpriseCommerce = $('#commerce');
    let typeEnterpriseService = $('#service');
    let totalEconomy = $('#total-economy');

    // Load initial value with default data
    updateMyHtml();

    // Setting my listeners to check changes on values
    quantityEmployers.on('keyup', () => updateMyHtml());
    regimeLP.change(() => updateMyHtml());
    regimeSN.change(() => updateMyHtml());
    typeEnterpriseCommerce.change(() => updateMyHtml());
    typeEnterpriseService.change(() => updateMyHtml());

    function checkTypeRegime(commerce = 300, otherValue = 129) {
        let val = 0;
        typeEnterpriseCommerce.is(':checked') ? val = commerce : val = otherValue;
        return val;
    }

    function checkTypeEnterprise(regLP = 200, otherValue = 0) {
        let val = 0;
        regimeLP.is(':checked') ? val = regLP : val = otherValue;
        return val;
    }

    function calculateEmployers(employers, priceEmployers = 50) {
        return employers * priceEmployers;
    }

    function calculateMyParcel() {
        let me = quantityEmployers.val();
        let total = checkTypeRegime() + checkTypeEnterprise() + calculateEmployers(me) + parseInt(monthlyParcel.val());
        let monthly = total / 12;
        return monthly.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }

    function calculateMyParcelOlder() {
        let me = quantityEmployers.val();
        let total = checkTypeRegime(500, 200) + checkTypeEnterprise() + calculateEmployers(me) + parseInt(monthlyParcel.val());
        return total.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 3});
    }

    function updateMyHtml() {
        showTotal.html('R$ ' + calculateMyParcel());
        let aux = parseInt(calculateMyParcelOlder()) - (12 * parseInt(calculateMyParcel()));
        aux <= 0 ? aux = 0 : aux;
        totalEconomy.html('R$ ' + aux);
    }
});
