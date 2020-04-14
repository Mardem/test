$(function () {
    // Select us input with variables
    let quantityEmployers = $('[name="quantity-employers"]');
    let showTotal = $('#per-monthly');
    let monthlyParcel = $('#enterprise');
    let regimeLP = $('#regime_lp');
    let regimeSN = $('#regime_sn');
    let typeEnterpriseCommerce = $('#commerce');
    let typeEnterpriseService = $('#service');

    // Load initial value with default data
    calculateMyParcel();

    // Setting my listeners to check changes on values
    quantityEmployers.on('keyup', () => calculateMyParcel());
    regimeLP.change(() => calculateMyParcel());
    regimeSN.change(() => calculateMyParcel());
    typeEnterpriseCommerce.change(() => calculateMyParcel());
    typeEnterpriseService.change(() => calculateMyParcel());

    function checkTypeRegime() {
        let val = 0;
        typeEnterpriseCommerce.is(':checked') ? val = 300 : val = 129;
        return val;
    }

    function checkTypeEnterprise() {
        let val = 0;
        regimeLP.is(':checked') ? val = 200 : val;
        return val;
    }

    function calculateEmployers(employers) {
        return employers * 50;
    }

    function calculateMyParcel() {
        let me = quantityEmployers.val();
        let total = checkTypeRegime() + checkTypeEnterprise() + calculateEmployers(me) + parseInt(monthlyParcel.val());
        let monthly = total / 12;
        let myTotal = monthly.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        console.log(myTotal);
        showTotal.html('R$ '+ myTotal);
    }
});
