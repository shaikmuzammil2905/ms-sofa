<?php	
	global $pgtl,$usr_pgtl;	
	$pgtl		= "BNR Stock Broking Pvt. Ltd. ";	
	$usr_pgtl	= "BNR Stock Broking Pvt. Ltd. ";
	$crntyr = date('Y');
	if($crntyr != 2026){
		$prd	= "2026" .'--'. $crntyr;
	}
	else{
		$prd = 2026;	
	}
	$pgftr 	= "";	
	
	$usr_cmpny 	= "BNR Stock Broking Pvt. Ltd. ";	
	
	$u_prjct_url		= "";
	$u_prjct_mnurl		= "";
	$prjct_dmn			= "";
	$u_prjct_email		= "info"."@$prjct_dmn";	
	$u_prjct_email_info	= "info"."@$prjct_dmn";	
	$rtpth = "/projects/furniture/v0/";
	
	$site_logo = 'assets/img/logo.png';
	
	
?>