<?php

namespace OutputDataConfigToolkitBundle\ConfigElement\Operator;

use JetBrains\PhpStorm\Pure;

class EtimColor extends AbstractOperator
{
    /**
     * @param $config
     * @param $context
     */
    #[Pure] public function __construct($config, $context = null)
    {
        parent::__construct($config, $context);
        $this->attribute = 'etimColor';
        $this->label = $config->label ?? '';
        $this->etimFeatureLabel = $config->etimFeatureLabel ?? '';
    }

    /**
     * @param \CoreShop\Component\Core\Model\ProductInterface $object
     *
     * @return \stdClass
     */
    public function getLabeledValue($object): \stdClass
    {
        $result = new \stdClass();
        $result->value = $object->getEtimColor();
        $result->label = $this->label ?? '';
        $result->etimFeatureLabel = $this->etimFeatureLabel ?? '';

        return $result;
    }

    /**
     * @return string
     */
    public function getAttribute(): string
    {
        return $this->attribute;
    }
}
