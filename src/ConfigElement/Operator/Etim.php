<?php

namespace OutputDataConfigToolkitBundle\ConfigElement\Operator;

use JetBrains\PhpStorm\Pure;

class Etim extends AbstractOperator
{
    protected string $etimFeatureCode;

    /**
     * @param $config
     * @param $context
     */
    #[Pure] public function __construct($config, $context = null)
    {
        parent::__construct($config, $context);

        $this->attribute = 'etim';
        $this->etimFeatureCode = $config->etimFeatureCode;
        $this->context = $context;
    }

    /**
     * @param $object
     *
     * @return \stdClass
     */
    #[Pure] public function getLabeledValue($object): \stdClass
    {
        $result = new \stdClass();
        $result->value = $this->etimFeatureCode;

        return $result;
    }
}
