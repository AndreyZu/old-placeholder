function initPlaceholder () {
    var inputs = document.getElementsByTagName ( 'input' );
    var textareas = document.getElementsByTagName ( 'textarea' );

    setPlaceholderEvent ( inputs );
    setPlaceholderEvent ( textareas );
}

function setPlaceholderEvent ( elements ) {
    for ( var i = 0; i < elements.length; i++ ) {
        elements[i].value = elements[i].getAttribute ( 'placeholder' );
        elements[i].onfocus = clearPlaceholder;
        elements[i].onblur = setPlaceholder;
    }
}

function clearPlaceholder () {
    this.value === this.getAttribute ( 'placeholder' ) && (this.value = '');
}

function setPlaceholder () {
    this.value === '' && (this.value = this.getAttribute ( 'placeholder' ));
}

initPlaceholder ();