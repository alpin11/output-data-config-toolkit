<?php

/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Commercial License (PCL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 *  @license    http://www.pimcore.org/license     GPLv3 and PCL
 */

namespace OutputDataConfigToolkitBundle\ConfigElement\Operator;

use Pimcore\Model\DataObject\Classificationstore\KeyConfig;

class Etim extends AbstractOperator
{
    protected $etimFeatureCode;
    protected $wtf;

    public function __construct($config, $context = null)
    {
        $this->etimFeatureCode = $config->etimFeatureCode;

        $this->context = $context;

        $this->wtf = KeyConfig::getByName("ef000001");
    }

    public function getLabeledValue($object)
    {
        $result = new \stdClass();
        $result->value = $this->etimFeatureCode;

        return $result;
    }
}
