<?php
add_action( 'init', 'hau_register_post_type' );
function hau_register_post_type() {
	register_post_type( 'expertise', array(
		'label' => __('Expertise', 'hau'),
		'public' => true,
		'labels' => array(
			'name' => __('Expertise', 'hau'),
			'singular_name' => __('Expertise', 'hau'),
			'add_new' => __('Add New', 'hau'),
			'add_new_item' => __('Add New', 'hau'),
			'edit_item' => __('Edit Expertise', 'hau'),
			'new_item' => __('New Expertise', 'hau'),
			'view_item' => __('View Expertise', 'hau'),
			'search_items' => __('Search Expertise', 'hau'),
			'not_found' =>  __('Not found Expertise', 'hau'),
			'not_found_in_trash' => __('Not found Expertise in trash', 'hau')
		),
		'show_ui' => true, 
		'query_var' => true,
		'rewrite' => array('slug' => 'expertise', 'with_front' => true),
		'capability_type' => 'post',
		'hierarchical' => true,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-screenoptions',
		'supports' => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes' )
	));

	register_post_type( 'sectors', array(
		'label' => __('Sectors', 'hau'),
		'public' => true,
		'labels' => array(
			'name' => __('Sectors', 'hau'),
			'singular_name' => __('Sectors', 'hau'),
			'add_new' => __('Add New', 'hau'),
			'add_new_item' => __('Add New', 'hau'),
			'edit_item' => __('Edit Sectors', 'hau'),
			'new_item' => __('New Sectors', 'hau'),
			'view_item' => __('View Sectors', 'hau'),
			'search_items' => __('Search Sectors', 'hau'),
			'not_found' =>  __('Not found Sectors', 'hau'),
			'not_found_in_trash' => __('Not found Sectors in trash', 'hau')
		),
		'show_ui' => true, 
		'query_var' => true,
		'rewrite' => array('slug' => 'sectors', 'with_front' => true),
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-screenoptions',
		'supports' => array( 'title', 'editor', 'excerpt', 'thumbnail' )
	));

	register_post_type( 'case-study', array(
		'label' => __('Case Studies', 'hau'),
		'public' => true,
		'labels' => array(
			'name' => __('Case Studies', 'hau'),
			'singular_name' => __('Case Studies', 'hau'),
			'add_new' => __('Add New', 'hau'),
			'add_new_item' => __('Add New', 'hau'),
			'edit_item' => __('Edit Case Study', 'hau'),
			'new_item' => __('New Case Study', 'hau'),
			'view_item' => __('View Case Study', 'hau'),
			'search_items' => __('Search Case Study', 'hau'),
			'not_found' =>  __('Not found Case Study', 'hau'),
			'not_found_in_trash' => __('Not found Case Studies in trash', 'hau')
		),
		'show_ui' => true, 
		'query_var' => true,
		'rewrite' => array('slug' => 'case-study', 'with_front' => true),
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-megaphone',
		'supports' => array( 'title', 'excerpt', 'thumbnail' )
	));

	register_post_type( 'solution', array(
		'label' => __('Solutions', 'hau'),
		'public' => true,
		'labels' => array(
			'name' => __('Solutions', 'hau'),
			'singular_name' => __('Solutions', 'hau'),
			'add_new' => __('Add New', 'hau'),
			'add_new_item' => __('Add New', 'hau'),
			'edit_item' => __('Edit Solution', 'hau'),
			'new_item' => __('New Solution', 'hau'),
			'view_item' => __('View Solution', 'hau'),
			'search_items' => __('Search Solution', 'hau'),
			'not_found' =>  __('Not found Solution', 'hau'),
			'not_found_in_trash' => __('Not found Solutions in trash', 'hau')
		),
		'show_ui' => true, 
		'query_var' => true,
		'rewrite' => array('slug' => 'solution', 'with_front' => true),
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-image-filter',
		'supports' => array( 'title', 'editor', 'excerpt', 'thumbnail' )
	));

	register_post_type( 'team', array(
		'label' => __('Team', 'hau'),
		'public' => true,
		'labels' => array(
			'name' => __('Team', 'hau'),
			'singular_name' => __('Team', 'hau'),
			'add_new' => __('Add New', 'hau'),
			'add_new_item' => __('Add New', 'hau'),
			'edit_item' => __('Edit Member', 'hau'),
			'new_item' => __('New Member', 'hau'),
			'view_item' => __('View Member', 'hau'),
			'search_items' => __('Search Member', 'hau'),
			'not_found' =>  __('Not found Member', 'hau'),
			'not_found_in_trash' => __('Not found Member in trash', 'hau')
		),
		'show_ui' => true, 
		'query_var' => true,
		'rewrite' => array('slug' => 'team', 'with_front' => true),
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-groups',
		'supports' => array( 'title', 'editor', 'thumbnail' )
	));

	register_post_type( 'timeline', array(
		'label' => __('Timelines', 'hau'),
		'public' => false,
		'labels' => array(
			'name' => __('Timelines', 'hau'),
			'singular_name' => __('Timelines', 'hau'),
			'add_new' => __('Add New', 'hau'),
			'add_new_item' => __('Add New', 'hau'),
			'edit_item' => __('Edit Timeline', 'hau'),
			'new_item' => __('New Timeline', 'hau'),
			'view_item' => __('View Timeline', 'hau'),
			'search_items' => __('Search Timeline', 'hau'),
			'not_found' =>  __('Not found Timeline', 'hau'),
			'not_found_in_trash' => __('Not found Timeline in trash', 'hau')
		),
		'show_ui' => true, 
		'query_var' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-clock',
		'supports' => array( 'title', 'editor', 'thumbnail' )
	));

	register_post_type( 'award', array(
		'label' => __('Awards', 'hau'),
		'public' => false,
		'labels' => array(
			'name' => __('Awards', 'hau'),
			'singular_name' => __('Awards', 'hau'),
			'add_new' => __('Add New', 'hau'),
			'add_new_item' => __('Add New', 'hau'),
			'edit_item' => __('Edit Award', 'hau'),
			'new_item' => __('New Award', 'hau'),
			'view_item' => __('View Award', 'hau'),
			'search_items' => __('Search Award', 'hau'),
			'not_found' =>  __('Not found Award', 'hau'),
			'not_found_in_trash' => __('Not found Award in trash', 'hau')
		),
		'show_ui' => true, 
		'query_var' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-awards',
		'supports' => array( 'title', 'editor' )
	));

	register_post_type( 'whitepaper', array(
		'label' => __('Whitepaper', 'hau'),
		'public' => true,
		'labels' => array(
			'name' => __('Whitepaper', 'hau'),
			'singular_name' => __('Whitepaper', 'hau'),
			'add_new' => __('Add New', 'hau'),
			'add_new_item' => __('Add New', 'hau'),
			'edit_item' => __('Edit Whitepaper', 'hau'),
			'new_item' => __('New Whitepaper', 'hau'),
			'view_item' => __('View Whitepaper', 'hau'),
			'search_items' => __('Search Whitepaper', 'hau'),
			'not_found' =>  __('Not found Whitepaper', 'hau'),
			'not_found_in_trash' => __('Not found Whitepaper in trash', 'hau')
		),
		'show_ui' => true, 
		'query_var' => true,
		'rewrite' => array('slug' => 'whitepaper', 'with_front' => true),
		'capability_type' => 'post',
		'hierarchical' => false,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-admin-page',
		'show_in_rest' => true,
		'supports' => array( 'title', 'editor', 'thumbnail', 'excerpt', 'author', 'post-formats' )
	));
}

add_action( 'init', 'hau_register_taxonomy', 0 );
function hau_register_taxonomy() {
	// register_taxonomy( 'sectors', 'case-study', array(
	// 	'labels' => array(
	// 		'name' => 'Sectors',
	// 		'singular_name' => 'Sectors',
	// 		'menu_name' => 'Sectors',
	// 		'search_items' => 'Search Sectors',
	// 		'all_items' => 'All Sectors',
	// 		'edit_item' => 'Edit Sectors',
	// 		'update_item' => 'Update Sectors',
	// 		'add_new_item' => 'Add New Sectors'
	// 	),
	// 	'label' => 'Sectors',
	// 	'query_var' => true,
	// 	'show_ui' => true,
	// 	'public' => false,
	// 	'rewrite' => false,
	// 	'hierarchical' => true,
	// 	'show_admin_column' => true
	// ));

	// register_taxonomy( 'expertise', 'case-study', array(
	// 	'labels' => array(
	// 		'name' => 'Expertise',
	// 		'singular_name' => 'Expertise',
	// 		'menu_name' => 'Expertise',
	// 		'search_items' => 'Search Expertise',
	// 		'all_items' => 'All Expertise',
	// 		'edit_item' => 'Edit Expertise',
	// 		'update_item' => 'Update Expertise',
	// 		'add_new_item' => 'Add New Expertise'
	// 	),
	// 	'label' => 'Expertise',
	// 	'query_var' => true,
	// 	'show_ui' => true,
	// 	'public' => false,
	// 	'rewrite' => false,
	// 	'hierarchical' => true,
	// 	'show_admin_column' => true
	// ));
}