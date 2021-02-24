<?php
defined( 'ABSPATH' ) || exit;

global $post;
$post_id = $post->ID;

$data = get_field( 'exp_solutions', $post_id );

if( empty( $data ) || empty( $data['solutions'] ) ) {
    return;
}

$bg_photo = '';

if( !empty( $data['bg_photo'] ) ) {
    $bg_photo = wp_get_attachment_image_url( $data['bg_photo'], 'full' );
}
?>
<section id="solutions" class="section-slider slider-left">
    <div class="section-inner">
        <div class="container d-flex justify-content-end">
            <div class="background" style="background-image: url(<?php echo esc_url( $bg_photo ); ?>);"></div>
            <div class="text">
                <?php
                if( !empty( $data['heading'] ) ) {
                    echo '<div class="heading">';
                        echo '<span>SOLUTIONS</span>';
                        echo '<h2>' .$data['heading']. '</h2>';
                    echo '</div>';
                }

                if( !empty( $data['content'] ) ) {
                    echo wpautop( $data['content'] );
                }

                if( !empty( $data['button']['url'] ) && !empty( $data['button']['title'] ) ) {
                    echo '<a href="' .esc_url( $data['button']['url'] ). '" target="' .( $data['button']['url'] ?: '_self' ). '" class="btn">' .$data['button']['title']. '</a>';
                }
                ?>
            </div>
            <!-- .slider-text -->
        </div>
        <!-- .container -->

        <?php
        $query = array(
            'post_type' => 'solution',
            'post_status' => 'publish',
            'posts_per_page' => count( $data['solutions'] ),
            'post__in' => $data['solutions'],
            'orderby' => 'post__in',
            'order' => 'DESC'
        );

        $solutions = get_posts( $query );

        if( $solutions ) :
            ?>
            <div class="slider equal-height" dir="rtl">
                <?php
                foreach( $solutions as $post ) {
                    setup_postdata($post);
                    
                    echo '<div class="slick-slide">';
                        echo get_template_part( 'template-parts/loop-default', null, array(
                            'more_text' => 'Explore'
                        ));
                    echo '</div>';
                }
                wp_reset_postdata();
                ?>
            </div>
            <!-- .slider -->
        <?php endif; ?>
    </div>
</section>
<!-- #solutions -->