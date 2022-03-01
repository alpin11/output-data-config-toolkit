<?php

namespace OutputDataConfigToolkitBundle\ConfigElement\Operator;

use JetBrains\PhpStorm\Pure;
use Pimcore\Model\DataObject\Classificationstore\KeyConfig;

class Etim extends AbstractOperator
{
    public string $etimFeatureCode;

    public array $etimFeature;

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
        $keyConfig = null;

        $result = new \stdClass();
        $result->value = '';
        $result->object = null;
        $result->etimFeatureCode = null;

        $mapped = collect($object->getEtimMapped());
        $etimFeature = $mapped->where('key', '=', $this->etimFeatureCode)->first();

        if(is_array($etimFeature)) {
            $result->value = $etimFeature['value'];
            $result->object = $etimFeature;
            $this->etimFeature = $etimFeature;
            $result->etimFeatureCode = $this->etimFeatureCode;
        }

        return $result;
    }
}
