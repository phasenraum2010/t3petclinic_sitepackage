plugin {
	tx_t3petclinic_sitepackage {
		view {
			templateRootPaths {
				10 = EXT:t3petclinic_sitepackage/Resources/Private/Templates/
				20 = {$plugin.tx_t3petclinic_sitepackage.view.templateRootPath}
			}
			content.templateRootPaths {
				10 = EXT:t3petclinic_sitepackage/Resources/Private/Templates/Content/
				20 = {$plugin.tx_t3petclinic_sitepackage.view.content.templateRootPath}
			}
			partialRootPaths {
				10 = EXT:t3petclinic_sitepackage/Resources/Private/Partials/
				20 = {$plugin.tx_t3petclinic_sitepackage.view.partialRootPath}
			}
			layoutRootPaths {
				10 = EXT:t3petclinic_sitepackage/Resources/Private/Layouts/
				20 = {$plugin.tx_t3petclinic_sitepackage.view.layoutRootPath}
			}
		}
		settings {
		}
	}
}
