<?php
add_shortcode( 'bs_row', function( $atts, $content = null ) {
    $atts = shortcode_atts( array(
        "xclass" => false,
        "data"   => false
    ), $atts );

    $class  = 'row';
    $class .= ( $atts['xclass'] )   ? ' ' . trim($atts['xclass']) : '';

    return sprintf(
        '<div class="%s">%s</div>',
        esc_attr( trim($class) ),
        do_shortcode( $content )
    );
});

add_shortcode( 'bs_column', function( $atts, $content = null ) {
    $atts = shortcode_atts( array(
        "lg" => false,
        "md" => false,
        "sm" => false,
        "xs" => false,
        "xclass" => false
    ), $atts );

    $class  = '';
    $class .= ( $atts['lg'] ) ? ' col-lg-' . trim($atts['lg']) : '';
    $class .= ( $atts['md'] ) ? ' col-md-' . trim($atts['md']) : '';
    $class .= ( $atts['sm'] ) ? ' col-sm-' . trim($atts['sm']) : '';
    $class .= ( $atts['xs'] ) ? ' col-xs-' . trim($atts['xs']) : '';
    $class .= ( $atts['xclass'] ) ? ' ' . trim($atts['xclass']) : '';

    return sprintf(
        '<div class="%s">%s</div>',
        esc_attr( trim($class) ),
        do_shortcode( $content )
    );
});