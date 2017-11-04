<?php

/**
 * Created by PhpStorm.
 * User: tw
 * Date: 04.11.17
 * Time: 19:54
 */

defined('TYPO3_MODE') or die();
call_user_func(
    function () {

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('t3petclinic_sitepackage', 'Configuration/TypoScript',
            'T3Petclinic Sitepackage'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('t3petclinic_sitepackage', 'Configuration/TypoScript/host/dev',
            'T3Petclinic Sitepackage Dev'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('t3petclinic_sitepackage', 'Configuration/TypoScript/host/live',
            'T3Petclinic Sitepackage Live'
        );

    }
);
